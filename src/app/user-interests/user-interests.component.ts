import { Component, OnInit } from '@angular/core';
import {Interest} from '../_models/interest';
import {UserService} from '../_services/user.service';
import {INTERESTS} from '../_models/interest-list';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/user';
import {InterestService} from '../_services/interest.service';

@Component({
  selector: 'app-user-interests',
  templateUrl: './user-interests.component.html',
  styleUrls: ['./user-interests.component.css']
})
export class UserInterestsComponent implements OnInit {

  user: User;
  interests: Interest[] = INTERESTS;
  constructor(
    private userService: UserService,
    private interestsService: InterestService) { }

  ngOnInit() {
    this.getUser().subscribe();
    this.getInterests().subscribe();
  }

  getUser(): Observable<User> {
    return this.userService.getUser('u1')
      .map((user: User) => {
        this.user = user;
        return this.user;
      });
  }

  getInterests(): Observable<Interest[]> {
    return this.interestsService.getInterests()
      .map((interests: Interest[]) => {
        this.interests = interests;
        return this.interests;
      });
  }

  updateInterests(): void {
    // update user object here
  }

}
