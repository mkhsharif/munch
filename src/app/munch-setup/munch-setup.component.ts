import { Component, OnInit } from '@angular/core';
import {LocationService} from '../_services/location.service';
import {MunchLocation} from '../_models/munch-location';
import {Observable} from 'rxjs/Observable';
import {Diet} from '../_models/diet';
import 'rxjs/add/observable/of';
import {DIETS} from '../_models/diet-list';
import {MunchRequest} from '../_models/munch-request';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import {MunchRequestService} from '../_services/munch-request.service';

@Component({
  selector: 'app-munch-setup',
  templateUrl: './munch-setup.component.html',
  styleUrls: ['./munch-setup.component.css']
})
export class MunchSetupComponent implements OnInit {

  locations: MunchLocation[];
  diets: Diet[] = DIETS;
  request: MunchRequest;
  user: User;
  constructor(
    private locationService: LocationService,
    private userService: UserService,
    private requestService: MunchRequestService) { }

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

  incrementState(): void {
    return;
  }

  decrementState(): void {
    return;
  }

  // State starts at 1
  // var state = 1;

  // function incrementState() {
  //   // increment state by 1
  //   // select element with class name (state + 1)
  //   // add show to that class
  //   // add hide to element with class name (state)
  // }
  //
  // function decrementState() {
  //   // decrement state by 1
  //   // select element with class name (state - 1)
  //   // add show to that class
  //   // add hide to element with class name (state)
  // }
}
