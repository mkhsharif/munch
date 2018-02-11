import {Component, OnInit} from '@angular/core';
import {User} from '../../_models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    points: 0,
    password: '',
    friends: [],
    shoutouts: [],
  };

  constructor() {
  }

  ngOnInit() {
  }

}
