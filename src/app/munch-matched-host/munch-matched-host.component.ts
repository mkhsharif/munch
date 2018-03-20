import { Component, OnInit } from '@angular/core';
import {MunchSession} from '../_models/munch-session';
import {User} from '../_models/user';
import {MunchLocation} from '../_models/munch-location';

@Component({
  selector: 'app-munch-matched-host',
  templateUrl: './munch-matched-host.component.html',
  styleUrls: ['./munch-matched-host.component.css']
})
export class MunchMatchedHostComponent implements OnInit {

  // TODO: update objects to use services and real data
  munchSession: MunchSession;
  currentUser: User;
  matchedUser: User;
  location: MunchLocation;
  constructor() { }

  ngOnInit() {
    this.munchSession = {
      _id: 's1',
      host_id: 'u1',
      user_ids: ['u1', 'u2'],
      location_id: 'l1',
      pending: true,
      active: true,
      pin: '1234'
    };

    this.currentUser = {
      _id: 'u1',
      firstName: 'current',
      lastName: 'user',
      userName: 'currentUser',
      email: '',
      phone: '',
      points: 0,
      password: '',
      friend_ids: [],
      shoutout_ids: [],
      avatarUrl: '',
      interests: [],
      diet_id: ''
    };

    this.matchedUser = {
      _id: 'u2',
      firstName: 'matched',
      lastName: 'user',
      userName: 'matchedUser',
      email: '',
      phone: '',
      points: 0,
      password: '',
      friend_ids: [],
      shoutout_ids: [],
      avatarUrl: '',
      interests: [],
      diet_id: ''
    };

    this.location = {
      _id: 'l1',
      name: 'Blackburn',
      longitude: '1',
      latitude: '2'
    };
  }

}
