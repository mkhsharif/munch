import { Component, OnInit } from '@angular/core';
import {UserInterest} from '../_models/user-interest';
import {User} from '../_models/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../_services/user.service';
import {Interest} from '../_models/interest';
import {INTERESTS} from '../_models/interest-list';


@Component({
  selector: 'app-music-affinity',
  templateUrl: './music-affinity.component.html',
  styleUrls: ['./music-affinity.component.css']
})
export class MusicAffinityComponent implements OnInit {
  user: User;
  interests: Interest[] = INTERESTS;
  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.getUser().subscribe();
    console.log(this.interests);
  }

  getUser(): Observable<User> {
    return this.userService.getUser('u1')
      .map((user: User) => {
        this.user = user;
        return this.user;
    });
  }
  submitInterests(): void {
    let i = 1;
    for (i ; i < this.interests.length; i++) {
      console.log(document.getElementById('i' + i.toString())
      );
    }
  }
}
