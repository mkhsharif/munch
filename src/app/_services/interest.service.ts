import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Interest} from '../_models/interest';

@Injectable()
export class InterestService {
  private interestsUrl = '/api/interests';

  constructor(private http: HttpClient) { }

  // get("/api/Interests")
  getInterests(): Observable<Interest[]> {
    return this.http.get<Interest[]>(this.interestsUrl);
  }

  // post("/api/Interests")
  createInterests(newInterest: Interest): Observable<Interest> {
    return this.http.post<Interest>(this.interestsUrl, newInterest);
  }

  getInterest(getInterestId: string): Observable<Interest> {
    return this.http.get<Interest>(this.interestsUrl  + '/' + getInterestId);
  }

  updateInterest(interest: Interest): Observable<Interest> {
    return this.http.put<Interest>(this.interestsUrl + '/' + interest._id, interest);
  }
}
