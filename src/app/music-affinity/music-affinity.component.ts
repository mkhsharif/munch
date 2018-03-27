import { Component, OnInit } from '@angular/core';
import {UserInterest} from '../_models/user-interest';
import {INTERESTSLIST, Preference} from '../_models/preference';
import {User} from '../_models/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../_services/user.service';
import {Interest} from '../_models/interest';

@Component({
  selector: 'app-music-affinity',
  templateUrl: './music-affinity.component.html',
  styleUrls: ['./music-affinity.component.css']
})
export class MusicAffinityComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.getUser().subscribe();
    console.log(INTERESTSLIST);
  }

  getUser(): Observable<User> {
    return this.userService.getUser('u1')
      .map((user: User) => {
        this.user = user;
        return this.user;
    });
  }
}
