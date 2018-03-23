import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Interest} from '../_models/interest';
import 'rxjs/add/observable/of';

@Injectable()
export class InterestService {
  private interestsUrl = '/api/interests';
  int1: Interest = {_id: 'i1', name: 'int1'};
  int2: Interest = {_id: 'i2', name: 'int2'};
  int3: Interest = {_id: 'i3', name: 'int3'};
  mockInterests: Interest[] = [this.int1, this.int2, this.int3];

  constructor(private http: HttpClient) { }

  getMockInterests(): Observable<Interest[]> {
    return Observable.of(this.mockInterests);
  }
  // get("/api/Interests")
  getInterests(): Observable<Interest[]> {
    return this.http.get<Interest[]>(this.interestsUrl);
  }

  // post("/api/Interests")
  createInterests(newInterest: Interest): Observable<Interest> {
    return this.http.post<Interest>(this.interestsUrl, newInterest);
  }

  getInterest(getInterestId: string): Observable<Interest> {
    if (getInterestId === this.int1._id) {
      return Observable.of(this.int1);
    }
    if (getInterestId === this.int2._id) {
      return Observable.of(this.int2);
    }
    if (getInterestId === this.int2._id) {
      return Observable.of(this.int2);
    }
    return this.http.get<Interest>(this.interestsUrl  + '/' + getInterestId);
  }

  updateInterest(interest: Interest): Observable<Interest> {
    return this.http.put<Interest>(this.interestsUrl + '/' + interest._id, interest);
  }
}
