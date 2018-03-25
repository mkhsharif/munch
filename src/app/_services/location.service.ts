import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MunchLocation} from '../_models/munch-location';
import 'rxjs/observable/of';
import {LOCATIONS} from '../_models/location-list';

@Injectable()
export class LocationService {

  constructor() { }

  getLocations(): Observable<MunchLocation[]> {
    return Observable.of(LOCATIONS);
  }

  getLocation(locationId): Observable<MunchLocation> {
    for (const loc of LOCATIONS) {
      if (loc._id === locationId) {
        return Observable.of(loc);
      }
    }
}

}
