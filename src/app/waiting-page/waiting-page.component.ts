import { Component, OnInit } from '@angular/core';
import {MunchRequest} from '../_models/munch-request';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {MunchRequestService} from '../_services/munch-request.service';
import {SocketService} from '../_services/socket.service';
import {SessionService} from '../_services/munch-session.service';
import {MunchSession} from '../_models/munch-session';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import * as similarity from 'compute-cosine-similarity';
import {Interest} from '../_models/interest';
import {InterestService} from '../_services/interest.service';
import {Diets} from '../_models/diets';
import {Genders} from '../_models/genders';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.css']
})
export class WaitingPageComponent implements OnInit {

  request: MunchRequest;
  requests: MunchRequest[] = [];
  cron: Subscription;
  currentUser: User;
  interests: Interest[];
  THRESHOLD = 0.4;
  constructor(
    private route: ActivatedRoute,
    private requestService: MunchRequestService,
    private socketService: SocketService,
    private sessionService: SessionService,
    private router: Router,
    private userService: UserService,
    private interestService: InterestService
  ) { }

  ngOnInit() {
    this.getCurrentUser().subscribe();
    this.getRequest().subscribe();
    this.getRequests().subscribe();
    this.getInterests().subscribe();
  }

  initIo(): void {
    this.socketService.initSocket();

    this.socketService.onNewMatch()
      .subscribe((session_id: string) => {
        console.log('client to session ' + session_id);
        this.cron.unsubscribe();
      });
  }

  getCurrentUser(): Observable<User> {
    return this.userService.getUser('u1') // TODO: base this on local storage/cookie
      .map((user: User) => {
        this.currentUser = user;
        return this.currentUser;
      });
  }

  getRequest(): Observable<MunchRequest> {
    const id = this.route.snapshot.paramMap.get('id');
    return this.requestService.getRequest(id)
      .map((request: MunchRequest) => {
        this.request = request;
        return this.request;
    });
  }

  getRequests(): Observable<MunchRequest[]> {
    const id = this.route.snapshot.paramMap.get('id');
    let observableRequests;
    if (id === 'r1' || id === 'r2') {
      console.log('Getting Mock Requests');
      observableRequests = this.requestService.getMockRequests();
    } else {
      observableRequests = this.requestService.getRequests();
    }
    return observableRequests.map((requests: MunchRequest[]) => {
      for (const request of requests) {
        if (request.pending === true && request.cron === true && this.isRequestMatch(this.request)) {
          this.requests.push(request);
        }
      }
      console.log(this.requests);
      return this.requests;
    });
  }

  getInterests(): Observable<Interest[]> {
    return this.interestService.getInterests()
      .map((interests: Interest[]) => {
        this.interests = interests;
        return this.interests;
    });
  }

  runCron(): Subscription {
    console.log('Waiting for match, starting cron timer');
    return this.requestService.runCron(this.request)
      .subscribe(() => {
        console.log('Request expired');
        this.router.navigate(['/dashboard'])
          .then(() => {console.log('Returning to Dashboard'); });
    });
  }

  createSession(session: MunchSession): void {
    this.sessionService.createSession(session)
      .subscribe((newSession: MunchSession) => {
        this.router.navigate(['/munch/match/' + newSession._id])
          .then(() => {
            this.socketService.createMatch(newSession);
            console.log('Navigating to session ' + newSession._id);
          }
        );
      }
    );
  }

  searchMatch(): void {
    // const match = this.requestService.req2; // base on algorithm results
    this.initIo();
    let match: MunchRequest = null;
    let match_percentage = 0;
    let new_percentage;
    for (const request of this.requests) {
      new_percentage = this.cosineSim(request);
      console.log(request._id + ' ' + new_percentage);
      if (new_percentage > match_percentage) {
        match_percentage = new_percentage;
        match = request;
      }
    }

    console.log('Attempting to match');
    if (match && match_percentage > this.THRESHOLD) {
      console.log('Matched!');
      let pin = String(Math.floor(Math.random() * 10));
      pin += String(Math.floor(Math.random() * 10));
      pin += String(Math.floor(Math.random() * 10));
      pin += String(Math.floor(Math.random() * 10));
      const common_interest_ids = this.request.interest_ids.filter(
        x => match.interest_ids.indexOf(x) > -1);

      const newSession: MunchSession = {
        host_id: this.currentUser._id,
        user_descriptions: [
          {user_id: this.currentUser._id, text: this.request.descriptionMessage},
          {user_id: match.user_id, text: match.descriptionMessage }
          ],
        location_id: this.request.location_id,
        pending: true,
        active: false,
        pin: pin,
        common_interest_ids: common_interest_ids,
        time_completed: null
      };

      this.createSession(newSession);
    } else {
      // start cron
      console.log('Starting cron');
      this.cron = this.runCron();
    }
  }

  requestToArray(request: MunchRequest): number[] {
    const vector: number[] = [];
    for (const interest of this.interests) {
      if (request.interest_ids.indexOf(interest._id) > -1) {
        vector.push(1);
      } else {
        vector.push(0);
      }
    } return vector;
  }

  cosineSim(otherRequest: MunchRequest): number {
    const a1 = this.requestToArray(this.request);
    const a2 = this.requestToArray(otherRequest);
    return similarity(a1, a2);
  }

  isRequestMatch(otherRequest: MunchRequest): boolean {
    const dietMatch: boolean = this.request.diet_preference === otherRequest.user_diet || this.request.diet_preference === Diets.ANY;
    const genderMatch: boolean = (this.request.gender_preference === otherRequest.user_gender
      || this.request.gender_preference === Genders.ANY);
    console.log(dietMatch && genderMatch);
    return dietMatch && genderMatch;
  }

}
