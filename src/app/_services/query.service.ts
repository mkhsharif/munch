import { Injectable } from '@angular/core';
import { Query } from '../_models/query';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QueryService {
  private queryUrl = '/api/queries';

  private mockQuery1: Query = {
    _id: 'mockQuery1',
    user: 'mockUser1',
    searching: false,
    locationPreference: 'Annex',
    dietPreference: 'Vegan',
    genderPreference: 'Female',
    interestsPreference: 'Music'
  };

  private mockQuery2: Query = {
    _id: 'mockQuery2',
    user: 'mockUser2',
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

  createQuery(query: Query): Observable<Query> {
    return this.http.post<Query>(this.queryUrl, query);
  }

  getMockQueries(): Observable<Query[]> {
    return Observable.of([this.mockQuery1, this.mockQuery2]);
  }

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(this.queryUrl);
  }

  getQuery(queryId: string): Observable<Query> {
    if (queryId === this.mockQuery1._id) {
      return Observable.of(this.mockQuery1);
    }

    if (queryId === this.mockQuery2._id) {
      return Observable.of(this.mockQuery2);
    }
    return this.http.get<Query>(this.queryUrl  + '/' + queryId);
  }

  updateQuery(query: Query): Observable<Query> {
    return this.http.put<Query>(this.queryUrl + '/' + query._id, query);
  }
}
