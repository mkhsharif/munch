import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import {UserInterest} from '../_models/user-interest';
import {MunchSession} from '../_models/munch-session';

@Component({
  selector: 'app-munch-active',
  templateUrl: './munch-active.component.html',

  styleUrls: ['./munch-active.component.css']
})
export class MunchActiveComponent implements OnInit {

  munchSession: MunchSession;
  userInterest1: UserInterest;
  userInterest2: UserInterest;
  userInterest3: UserInterest;
  userInterest4: UserInterest;
  userInterest5: UserInterest;
  userInterest6: UserInterest;
  userInterest7: UserInterest;

  userInterests: UserInterest[];


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


  constructor() { }

  ngOnInit() {
   /* this.munchSession = {
      _id: 's1',
      host_id: 'u1',
      user_ids: ['u1', 'u2'],
      location_id: 'l1',
      pending: true,
      active: true,
      pin: '1234',
      common_interest_ids: ['i2', 'i3', 'i4', 'i5', 'i6'],
      time_completed: null
    };*/




     this.userInterest1 = {
       interest_id: 'i1',
       weight: 4,
     };

      this.userInterest2 = {
        interest_id: 'i2',
      weight: 6,
    };

      this.userInterest3 = {
        interest_id: 'i3',
      weight: 10,
    };

      this.userInterest4 = {
        interest_id: 'i4',
      weight: 3,
    };

      this.userInterest5 = {
        interest_id: 'i5',
      weight: 7,
    };

      this.userInterest6 = {
        interest_id: 'i6',
      weight: 8,
    };

      this.userInterest7 = {
        interest_id: 'i7',
      weight: 1,
    };
  }

}
