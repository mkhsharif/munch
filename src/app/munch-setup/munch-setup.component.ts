import { Component, OnInit } from '@angular/core';
import {LocationService} from '../_services/location.service';
import {MunchLocation} from '../_models/munch-location';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-munch-setup',
  templateUrl: './munch-setup.component.html',
  styleUrls: ['./munch-setup.component.css']
})
export class MunchSetupComponent implements OnInit {

  locations: MunchLocation[];
  constructor(
    private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations().subscribe();
  }

  getLocations(): Observable<MunchLocation[]> {
    return this.locationService.getLocations()
      .map((locations: MunchLocation[]) => {
        this.locations = locations;
        return this.locations;
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
