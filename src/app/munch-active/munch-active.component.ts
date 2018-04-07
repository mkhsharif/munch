import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import {MunchSession} from '../_models/munch-session';
import {Observable} from 'rxjs/Observable';
import {SessionService} from '../_services/munch-session.service';
import {ActivatedRoute} from '@angular/router';
import {InterestService} from '../_services/interest.service';
import {Interest} from '../_models/interest';
import {LocationService} from '../_services/location.service';
import {MunchLocation} from '../_models/munch-location';
import {UserDescription} from '../_models/user-description';

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

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value
    width: 1,
    height: 400,
    overflow: true,
  };

  data: CloudData[] = [
    {text: 'Weight-8-link-color', weight: 10, link: 'https://google.com', color: '#ffaaee'},
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
    private route: ActivatedRoute
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

  getDescription(): Observable<UserDescription> {
    const id = this.route.snapshot.paramMap.get('id');
    return this.sessionService.getSession(id)
      .map((session: MunchSession) => {
        this.session = session;
        return this.session.user_descriptions[0];
      });

  }

  leaveSession(): void {
    console.log('Leaving session');
    // mark session as inactive here, then navigate away
  }
}
