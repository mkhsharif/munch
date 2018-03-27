import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Interest} from '../_models/interest';
import 'rxjs/add/observable/of';
import {INTERESTS} from '../_models/interest-list';

@Injectable()
export class InterestService {
  private interestsUrl = '/api/interests';
  interests: Interest[] = INTERESTS;

  constructor(private http: HttpClient) { }

  getInterests(): Observable<Interest[]> {
    return Observable.of(this.interests);
  }

  createInterest(newInterest: Interest): Observable<Interest> {
    return this.http.post<Interest>(this.interestsUrl, newInterest);
  }

  getInterest(getInterestId: string): Observable<Interest> {
    for (const interest of this.interests) {
      if (interest._id === getInterestId) {
        return Observable.of(interest);
      }
    }
  }

  updateInterest(interest: Interest): Observable<Interest> {
    return this.http.put<Interest>(this.interestsUrl + '/' + interest._id, interest);
  }
}
