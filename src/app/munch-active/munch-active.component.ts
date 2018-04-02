import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import {InterestsComponent} from '../interests/interests.component';
import {Interest} from '../_models/interest';
import {UserInterest} from '../_models/user-interest';

@Component({
  selector: 'app-munch-active',
  templateUrl: './munch-active.component.html',

  styleUrls: ['./munch-active.component.css']
})
export class MunchActiveComponent implements OnInit {


  userInterest1: UserInterest;
  userInterest2: UserInterest;
  userInterest3: UserInterest;
  userInterest4: UserInterest;
  userInterest5: UserInterest;
  userInterest6: UserInterest;
  userInterest7: UserInterest;


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
     this.userInterest1 = {
       interest_id: 'i1';
       weight: '4';
     };

      this.userInterest2 = {
        interest_id: 'i2';
      weight: '6';
    };

      this.userInterest3 = {
        interest_id: 'i3';
      weight: '10';
    };

      this.userInterest4 = {
        interest_id: 'i4';
      weight: '3';
    };

      this.userInterest5 = {
        interest_id: 'i5';
      weight: '7';
    };

      this.userInterest6 = {
        interest_id: 'i6';
      weight: '7';
    };

      this.userInterest7 = {
        interest_id: 'i7';
      weight: '7';
    };
  }

}
