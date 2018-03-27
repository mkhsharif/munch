import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MunchLocation} from '../_models/munch-location';
import 'rxjs/observable/of';
import {LOCATIONS} from '../_models/location-list';

@Injectable()
export class LocationService {
  locations: MunchLocation[] = LOCATIONS;
  constructor() { }

  getLocations(): Observable<MunchLocation[]> {
    return Observable.of(this.locations);
  }

  getLocation(locationId): Observable<MunchLocation> {
    for (const loc of this.locations) {
      if (loc._id === locationId) {
        return Observable.of(loc);
      }
    }
}

}
