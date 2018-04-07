import { Component, OnInit } from '@angular/core';
import {LocationService} from '../_services/location.service';
import {MunchLocation} from '../_models/munch-location';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {MunchRequest} from '../_models/munch-request';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import {MunchRequestService} from '../_services/munch-request.service';
import {Router} from '@angular/router';
import {Diets} from '../_models/diets';
import {Genders} from '../_models/genders';

@Component({
  selector: 'app-munch-setup',
  templateUrl: './munch-setup.component.html',
  styleUrls: ['./munch-setup.component.css']
})
export class MunchSetupComponent implements OnInit {
  state: number;
  isStateOne: boolean;
  locations: MunchLocation[];
  diets: Diets[] = [Diets.ANY, Diets.VEGETARIAN, Diets.HALAL, Diets.PESCATARIAN, Diets.VEGAN];
  selectedDiet: Diets;
  genders: Genders[] = [Genders.ANY, Genders.MALE, Genders.FEMALE];
  selectedGender: Genders;
  user: User;
  selectedLocation: MunchLocation;
  description: string;
  constructor(
    private locationService: LocationService,
    private userService: UserService,
    private requestService: MunchRequestService,
    private router: Router) {
    this.state = 1;
    this.isStateOne = true;
  }

  ngOnInit() {
    this.getLocations().subscribe();
    this.getUser().subscribe();
  }

  getLocations(): Observable<MunchLocation[]> {
    return this.locationService.getLocations()
      .map((locations: MunchLocation[]) => {
        this.locations = locations;
        return this.locations;
      });
  }

  // TODO: Make this get the current user, not a mock
  getUser(): Observable<User> {
    return this.userService.getUser('u1')
      .map((user: User) => {
        this.user = user;
        return this.user;
      });
  }

  createRequest(): void {
    const interest_ids: string[] = [];
    for (const userInterest of this.user.interests) {
      interest_ids.push(userInterest.interest_id);
    }

    const request: MunchRequest = {
      user_id: this.user._id,
      time: new Date(),
      location_id: this.selectedLocation._id,
      pending: false,
      cron: false,
      descriptionMessage: this.description,
      interest_ids: interest_ids,
      diet_preference: this.selectedDiet,
      gender_preference: this.selectedGender,
      user_gender: this.user.gender,
      user_diet: this.user.diet
    };

    this.requestService.createRequest(request)
      .subscribe((newRequest: MunchRequest) => {
        this.router.navigate(['/munch/waiting/' + newRequest._id])
          .then(() => {
            console.log('Navigating to request' + newRequest._id);
          });
    });
  }

  incrementState(): void {
    if (this.state != 1) {
      this.isStateOne = false;
    }
    var nextButtonElements = document.getElementsByClassName("next-button");
    var nextButtonElement = (nextButtonElements[0] as HTMLElement);
    // we move on to the munch match after state 5
    if (this.state != 5) {
      // if the next button is already greyed out, undo it
      if (nextButtonElement.classList.contains("greyed-out")) {
        nextButtonElement.classList.remove("greyed-out");
      }
      var stateString = this.state.toString();
      var currentStateElements = document.getElementsByClassName("state-"+stateString);
      var currentStateElement = (currentStateElements[0] as HTMLElement);
      var newStateInt = this.state + 1;
      var newStateClassName = "state-" + newStateInt;
      var newStateElements = document.getElementsByClassName(newStateClassName);
      var newStateElement = newStateElements[0];
      currentStateElement.classList.add("inactive");
      newStateElement.classList.remove("inactive");
      this.state = newStateInt;
    }
    else {
      nextButtonElement.classList.add("greyed-out");
    }
  }

  decrementState(): void {
    if (this.state != 1) {
      this.isStateOne = false;
    }
    // back next button shouldn't be grey if state is being decremented
    var nextButtonElements = document.getElementsByClassName("next-button");
    var nextButtonElement = (nextButtonElements[0] as HTMLElement);
      // if the next button is already greyed out, undo it
    if (nextButtonElement.classList.contains("greyed-out")) {
      nextButtonElement.classList.remove("greyed-out");
    }
    //we move back to the dashbord before state 1
    if (this.state != 1) {
      var stateString = this.state.toString();
      var currentStateElements = document.getElementsByClassName("state-"+stateString);
      var currentStateElement = (currentStateElements[0] as HTMLElement);
      var newStateInt = this.state - 1;
      var newStateClassName = "state-" + newStateInt;
      var newStateElements = document.getElementsByClassName(newStateClassName);
      var newStateElement = newStateElements[0];
      currentStateElement.classList.add("inactive");
      newStateElement.classList.remove("inactive");
      this.state = newStateInt;
    }
  }
}
