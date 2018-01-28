import { Component, OnInit } from '@angular/core';
import {User} from '../../../user/user';
import {AuthenticationService} from '../../../user/authentication.service';
import {UserService} from '../../../user/user.service';

@Component({
  selector: 'app-query-friends',
  templateUrl: './query-friends.component.html',
  styleUrls: ['./query-friends.component.css']
})
export class QueryFriendsComponent implements OnInit {

  filteredFriends: User[];
  allFriends: User[];
  inputName = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allFriends = this.getAllFriends();
    this.filteredFriends = this.allFriends.slice();
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
    console.log(this.filteredFriends);
  }

  getAllFriends(): User[] {
    const friends: User[] = [];
    for (const friendId of AuthenticationService.user.friends) {
      this.userService.getUser(friendId)
        .subscribe(friend => friends.push(friend));
    }
    return friends;
  }
}
