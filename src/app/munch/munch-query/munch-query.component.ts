import { Component, OnInit } from '@angular/core';
import {Query} from './query';
import {DIETPREFERENCE, GENDERPREFERENCE, INTERESTSPREFERENCE, LOCATIONPREFERENCE} from './preferences/preference-list';
import {User} from '../../user/user';

@Component({
  selector: 'app-munch-query',
  templateUrl: './munch-query.component.html',
  styleUrls: ['./munch-query.component.css']
})
export class MunchQueryComponent implements OnInit {
  query: Query = {
    user: '',
    friendsMap: new Map<string, User>(),
    status: '',
    locationPreference: LOCATIONPREFERENCE,
    dietPreference: DIETPREFERENCE,
    genderPreference: GENDERPREFERENCE,
    interestsPreference: INTERESTSPREFERENCE
};

  constructor() { }

  ngOnInit() {
  }

  submitQuery () {}
}