import { Component, OnInit } from '@angular/core';
import {Interest} from '../_models/interest';
import {UserService} from '../_services/user.service';
import {INTERESTS} from '../_models/interest-list';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/user';
import {InterestService} from '../_services/interest.service';
import {current} from 'codelyzer/util/syntaxKind';

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
    const user_interests = [];
    for (const interest of this.interestSelections) {
      user_interests.push({interest: interest.interest_id, weight: interest.selected});
    }
    this.user.interests = user_interests;
    console.log(this.user.interests);
    }
    // update user object here then pass to userService.update
    // convert interests to user interests using the method in the service
    // save them to the user object
    // console.log(this.interestsService.toUserInterest());
    // console.log(this.interestsService.toUserInterest({_id: 'i1', name: 'Music'}, 0));
  toggleInterest(index, event) {
    this.interestSelections[index].selected = event.checked;
  }

}
