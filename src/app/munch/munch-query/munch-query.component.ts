import { Component, OnInit } from '@angular/core';
import {Query} from './query';

@Component({
  selector: 'app-munch-query',
  templateUrl: './munch-query.component.html',
  styleUrls: ['./munch-query.component.css']
})
export class MunchQueryComponent implements OnInit {
  query: Query = {
    user: '',
    status: '',
    locationPreference: '',
    dietPreference: '',
    genderPreference: '',
    interestsPreference: ''
};

  constructor() { }

  ngOnInit() {
  }

  handleQueryUpdated(query: Query) {
    this.query.locationPreference = query.locationPreference;
    this.query.dietPreference = query.dietPreference;
    this.query.genderPreference = query.genderPreference;
    this.query.interestsPreference = query.interestsPreference;
    console.log(query);
  }
  submitQuery () {}
}
