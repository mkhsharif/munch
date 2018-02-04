import { Injectable } from '@angular/core';
import { Query } from './query';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class QueryServiceService {
  private queryUrl = '/api/queries';

  private static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  constructor(private http: HttpClient) { }

  createQuery(query: Query): Observable<Query> {
    return this.http.post<Query>(this.queryUrl, query);
  }

  getQueries() {
    const qs: Query[] = [];
    const a: Query = {
      user: '',
      status: '',
      locationPreference: 'Annex',
      dietPreference: 'Vegan',
      genderPreference: 'Female',
      interestsPreference: 'Music'
    };
    qs.push(a);
    return qs;

  }

}
