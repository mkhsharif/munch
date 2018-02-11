import { Injectable } from '@angular/core';
import { Query } from '../munch/munch-query/query';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class QueryServiceService {
  private queryUrl = '/api/queries';

  private mockQuery1: Query = {
    _id: 'mockQuery1',
    user: 'mockUser1',
    status: '',
    locationPreference: 'Annex',
    dietPreference: 'Vegan',
    genderPreference: 'Female',
    interestsPreference: 'Music'
  };

  private mockQuery2: Query = {
    _id: 'mockQuery2',
    user: 'mockUser2',
    status: '',
    locationPreference: 'Punchout',
    dietPreference: 'Any',
    genderPreference: 'Any',
    interestsPreference: 'Anime'
  };

  private static handleError (error: any) {
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
}
