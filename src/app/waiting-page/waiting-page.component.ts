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
  constructor(
    private route: ActivatedRoute,
    private requestService: MunchRequestService,
    private socketService: SocketService,
    private sessionService: SessionService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCurrentUser().subscribe();
    this.getRequest().subscribe();
    this.getRequests().subscribe();
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
        if (request.pending === true && request.cron === true) {
          this.requests.push(request);
          console.log(request);
        }
      }
      console.log(this.requests);
      return this.requests;
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
    const match = null;
    // do cosine similarity here
    console.log('Attempting to match');
    if (match) {
      // create session
      console.log('matched');
      let pin = String(Math.floor(Math.random() * 10));
      pin += String(Math.floor(Math.random() * 10));
      pin += String(Math.floor(Math.random() * 10));
      pin += String(Math.floor(Math.random() * 10));
      const common_interest_ids = this.request.interest_ids.filter(
        x => match.interest_ids.indexOf(x) > -1);
      console.log(this.request.interest_ids);
      console.log(match.interest_ids);
      const newSession: MunchSession = {
        host_id: this.currentUser._id,
        user_ids: [this.currentUser._id, match.user_id],
        location_id: this.request.location_id,
        pending: true,
        active: false,
        pin: pin,
        common_interest_ids: common_interest_ids,
        time_completed: null
      };
      console.log(newSession);
      this.createSession(newSession);
    } else {
      // start cron
      console.log('starting cron');
      this.cron = this.runCron();
    }
  }

}
