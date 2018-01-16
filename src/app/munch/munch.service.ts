import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Query} from './munch-query/query';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MunchService {
  private queryUrl = '/api/queries';
  private sessionUrl = '/api/sessions';

  private static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  constructor(private http: HttpClient) { }

  createQuery(query: Query): Observable<Query> {
    return this.http.post<Query>(this.queryUrl, query);
  }
}
