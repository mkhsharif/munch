import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Interest} from '../_models/interest';
import {INTERESTS} from '../_models/interest-list';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import {Observable} from 'rxjs/Observable';
import {InterestService} from '../_services/interest.service';
import {UserInterest} from '../_models/user-interest';


class InterestSelection {
  interest_id: string;
  selected: boolean;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  interests: Interest[] = INTERESTS;
  interestSelections: InterestSelection[] = [];

  constructor(private authService: AuthenticationService,
              private interestService: InterestService,
              private  userService: UserService) { }

  ngOnInit() {
    this.getInterests().flatMap(() => {
      return this.getUser();
    }).subscribe((user: User) => {
      const userInterestIds: string[] = [];
      for (const userInterest of user.interests) {
        userInterestIds.push(userInterest.interest_id);
      }
      for (const interest of this.interests) {
        const select = userInterestIds.includes(interest._id);
        this.interestSelections.push(
          {interest_id: interest._id, selected: select}
        );
      }
    });
  }

  getUser(): Observable<User> {
    const id = this.userService.getCurrentUser()._id;
    return this.userService.getUser(id)
      .map((user: User) => {
        this.user = user;
        return this.user;
      });
  }

  getInterests(): Observable<Interest[]> {
    return this.interestService.getInterests()
      .map((interests: Interest[]) => {
        this.interests = interests;
        return this.interests;
      });
  }

  updateInterests(): void {
    const user_interests: UserInterest[] = [];
    for (const interest of this.interestSelections) {
      if (interest.selected === true) {
        user_interests.push({interest_id: interest.interest_id, weight: 1});
      }
    }
    this.user.interests = user_interests;
    this.userService.updateUser(this.user)
      .subscribe((user: User) => {
          console.log('Updated interests for ' + user.userName);
        });
  }

  toggleInterest(index, event) {
    this.interestSelections[index].selected = event.checked;
  }

}
