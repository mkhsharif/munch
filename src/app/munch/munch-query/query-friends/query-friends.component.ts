import { Component, OnInit } from '@angular/core';
import {User} from '../../../_models/user';
import {UserService} from '../../../_services/user.service';

@Component({
  selector: 'app-query-friends',
  templateUrl: './query-friends.component.html',
  styleUrls: ['./query-friends.component.css']
})
export class QueryFriendsComponent implements OnInit {

  filteredFriends: User[];
  allFriends: User[];
  inputName = '';
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.getAllFriends();
  }

  filterFriends() {
    this.filteredFriends = [];
    if (this.inputName !== '') {
      this.allFriends.forEach(friend => {
        if (friend.userName.toLowerCase().indexOf(
          this.inputName.toLowerCase()) >= 0) {
          this.filteredFriends.push(friend);
        }
      });
    } else {
      this.filteredFriends = this.allFriends.slice();
    }
    this.filteredFriends = this.filteredFriends.slice(0, 3);
    console.log(this.filteredFriends);
  }

  clearfilterFriends() {
    this.filteredFriends = [];
  }

  getAllFriends(): void {
    // for (const friendId of this.user_id.friend_ids) {
    //   this.userService.getUser(friendId)
    //     .subscribe(friend => friend_ids.push(friend));
    // }
    // this.userService.getUsers()
    //   .subscribe(users => console.log(users));
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.allFriends = users;
      });
  }
}
