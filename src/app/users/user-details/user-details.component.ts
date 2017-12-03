import {Component, OnInit} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User = {
    firstName: 'mock',
    lastName: 'mockington',
    userName: 'mock1',
    email: 'mock@mock.com',
    phone: '555-5555',
    points: 0,
    pword: 'mock',
    friends: {},
    shoutouts: {},
    current_session: {}
  };

  constructor() {
  }

  ngOnInit() {
  }

}
