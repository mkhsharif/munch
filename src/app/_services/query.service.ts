import { Injectable } from '@angular/core';
import { MunchRequest } from '../_models/munch-request';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QueryService {
  private queryUrl = '/api/queries';

  private mockQuery1: MunchRequest = {
    _id: 'mockQuery1',
    user_id: 'mockUser1',
    searching: false,
    locationPreference: 'Annex',
    dietPreference: 'Vegan',
    genderPreference: 'Female',
    interestsPreference: 'Music'
  };

  private mockQuery2: MunchRequest = {
    _id: 'mockQuery2',
    user_id: 'mockUser2',
    searching: false,
    locationPreference: 'Punchout',
    dietPreference: 'Any',
    genderPreference: 'Any',
    interestsPreference: 'Anime'
  };

  static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  constructor(private http: HttpClient) { }

  createQuery(query: MunchRequest): Observable<MunchRequest> {
    return this.http.post<MunchRequest>(this.queryUrl, query);
  }

  getMockQueries(): Observable<MunchRequest[]> {
    return Observable.of([this.mockQuery1, this.mockQuery2]);
  }

  getQueries(): Observable<MunchRequest[]> {
    return this.http.get<MunchRequest[]>(this.queryUrl);
  }

  getQuery(queryId: string): Observable<MunchRequest> {
    if (queryId === this.mockQuery1._id) {
      return Observable.of(this.mockQuery1);
    }

    if (queryId === this.mockQuery2._id) {
      return Observable.of(this.mockQuery2);
    }
    return this.http.get<MunchRequest>(this.queryUrl  + '/' + queryId);
  }

  updateQuery(query: MunchRequest): Observable<MunchRequest> {
    return this.http.put<MunchRequest>(this.queryUrl + '/' + query._id, query);
  }
}
