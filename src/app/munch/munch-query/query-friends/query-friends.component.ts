import { Component, OnInit } from '@angular/core';
import {User} from '../../../user/user';

@Component({
  selector: 'app-query-friends',
  templateUrl: './query-friends.component.html',
  styleUrls: ['./query-friends.component.css']
})
export class QueryFriendsComponent implements OnInit {

  filteredFriends: User[];
  inputName = '';
  constructor() { }

  ngOnInit() {
  }

  filterFriends() {
    this.filteredFriends = [];
    if (this.inputName !== '') {
      this.inputName = '';
    }
  }
}
