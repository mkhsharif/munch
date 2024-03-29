import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import {MunchSession} from '../_models/munch-session';
import {Observable} from 'rxjs/Observable';
import {SessionService} from '../_services/munch-session.service';
import {InterestService} from '../_services/interest.service';
import {Interest} from '../_models/interest';
import {LocationService} from '../_services/location.service';
import {MunchLocation} from '../_models/munch-location';
import {UserDescription} from '../_models/user-description';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';


class CData {

  text: string;
  weight: number;

  constructor(text: string, weight: number) {
    this.text = text;
    this.weight = weight;
  }
}
@Component({
  selector: 'app-munch-active',
  templateUrl: './munch-active.component.html',

  styleUrls: ['./munch-active.component.css']
})
export class MunchActiveComponent implements OnInit {

  session: MunchSession;
  interests: Interest[] = [];
  location: MunchLocation;
  userDescription: UserDescription;
  currentUser: User;
  hostUser: User;
  clientUser: User;
  hostDescription: string;
  clientDescription: string;
  isHost: boolean;

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 1,
    height: 320,
    overflow: true,
  };

  data: CloudData[] = [
    {text: 'Weight-10-link', link: 'https://google.com', color: '#ffaaee'},
    {text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    {text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    {text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    {text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    {text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    {text: 'Weight-10-link', weight: 10, link: 'https://google.com' },
    // ...
  ];

  constructor(
    private sessionService: SessionService,
    private interestService: InterestService,
    private locationService: LocationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getSession().flatMap((session: MunchSession) => {
      // get interests from ids in session
      for (const interest_id of session.common_interest_ids) {
        this.getInterest(interest_id)
          .subscribe((interest: Interest) => {
            this.interests.push(interest);
        });
      }
      // get location from id in session
      return this.getLocation(session.location_id);
    }).subscribe();


    this.getCurrentUser()
      .flatMap(() => {
        return this.getSession();
      }).flatMap((session: MunchSession) => {
      let client_id = '';
      if (session.user_descriptions[0].user_id === session.host_id) {
        client_id = session.user_descriptions[1].user_id;
        this.clientDescription = session.user_descriptions[1].text;
        this.hostDescription = session.user_descriptions[0].text;
      } else {
        client_id = session.user_descriptions[0].user_id;
        this.clientDescription = session.user_descriptions[0].text;
        this.hostDescription = session.user_descriptions[1].text;
      }
      this.getLocation(session.location_id).subscribe();
      return Observable.forkJoin([
        this.userService.getUser(session.host_id),
        this.userService.getUser(client_id),
      ]);
    }).map((data: User[]) => {
      this.hostUser = data[0];
      this.clientUser = data[1];
      this.isHost = this.hostUser._id === this.currentUser._id;
      console.log(this.hostUser._id);
      console.log(this.currentUser._id);
      console.log(data);
    }).subscribe();
    this.newCloudData();
  }

  getSession(): Observable<MunchSession> {
    const id = this.route.snapshot.paramMap.get('id');
    return this.sessionService.getSession(id)
      .map((session: MunchSession) => {
        this.session = session;
        return this.session;
      });
  }

  getInterest(interest_id: string): Observable<Interest> {
    return this.interestService.getInterest(interest_id)
      .map((interest: Interest) => {
        return interest;
    });
  }

  getLocation(location_id: string): Observable<MunchLocation> {
    return this.locationService.getLocation(location_id)
      .map((location: MunchLocation) => {
        this.location = location;
        return this.location;
      });
  }

  // TODO: Remove the following 3 methods when wiring in real data
  getCurrentUser(): Observable<User> {
    const id = this.userService.getCurrentUser()._id;
    return this.userService.getUser(id)
      .map((user: User) => {
        this.currentUser = user;
        return this.currentUser;
      });
  }

  getHost(): Observable<User> {
    return this.userService.getMockUser1();
  }

  getClient(): Observable<User> {
    return this.userService.getMockUser2();
  }

  leaveSession(): void {
    console.log('Leaving session');
    this.session.active = false;
    console.log('Session Active: ' + this.session.active);
    this.sessionService.updateSession(this.session).subscribe((session: MunchSession) => {
      console.log('Session:' + this.session);
    });
    this.router.navigate(['/profile']);
  }

  newCloudData() {
    /*let i;
    console.log('clicked');

    .setTimeout(() => {
      for (i = 0; i < this.interests.length; i++) {
        this.data[i].text =  this.interests[i].name;
      }
    }, 5000);
    console.log(this.data[0].text);
  }*/

    const changedData: Observable<CloudData[]> = Observable.of([
      new CData(this.interests[0].name, Math.floor((Math.random() * 10) + 1)),
      new CData(this.interests[1].name, Math.floor((Math.random() * 10) + 1)),
      new CData(this.interests[2].name, Math.floor((Math.random() * 10) + 1)),
      new CData(this.interests[3].name, Math.floor((Math.random() * 10) + 1)),
      new CData(this.interests[4].name, Math.floor((Math.random() * 10) + 1)),
    ]);
    changedData.subscribe(res => this.data = res);

  }


}
