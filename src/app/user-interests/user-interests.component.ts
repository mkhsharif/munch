import { Component, OnInit } from '@angular/core';
import {Interest} from '../_models/interest';
import {UserService} from '../_services/user.service';
import {INTERESTS} from '../_models/interest-list';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/user';
import {InterestService} from '../_services/interest.service';
import {UserInterest} from '../_models/user-interest';
import {Genders} from '../_models/genders';

class InterestSelection {
  interest_id: string;
  selected: boolean;
}



@Component({
  selector: 'app-user-interests',
  templateUrl: './user-interests.component.html',
  styleUrls: ['./user-interests.component.css']
})

export class UserInterestsComponent implements OnInit {

  user: User;
  interests: Interest[] = INTERESTS;
  interestSelections: InterestSelection[] = [];
  genders: Genders[] = [Genders.MALE, Genders.FEMALE];
  selectedGender: Genders.MALE | Genders.FEMALE;
  constructor(
    private userService: UserService,
    private interestsService: InterestService) { }

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
    return this.interestsService.getInterests()
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
    this.user.gender = this.selectedGender;
    console.log('Users updated gender:' + this.user.gender);
    this.user.interests = user_interests;
    if (('u1' === this.user._id) || ('u2' === this.user._id)) {
      console.log(this.user.interests);
      console.log(this.user);
      console.log('Updated interests for ' + this.user.userName);
    } else {
      this.userService.updateUser(this.user)
        .subscribe((user: User) => {
          console.log('Updated interests for ' + user.userName);
        });
    }
  }

  toggleInterest(index, event) {
    this.interestSelections[index].selected = event.checked;
  }
}
