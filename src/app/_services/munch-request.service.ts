import { Injectable } from '@angular/core';
import { MunchRequest } from '../_models/munch-request';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MunchRequestService {
  private requestUrl = '/api/requests';
  // TODO: Give interest ids
  req1: MunchRequest = {
    _id: 'r1',
    user_id: 'u1',
    time: null,
    location_id: 'l1',
    pending: false,
    cron: false,
    descriptionMessage: 'u1',
    interest_ids: [],
    diet_id: 'd1'
  };

  req2: MunchRequest = {
    _id: 'r2',
    user_id: 'u2',
    time: null,
    location_id: 'l1',
    pending: true,
    cron: true,
    descriptionMessage: 'u2',
    interest_ids: [],
    diet_id: 'd1'
  };

  static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
  constructor(private http: HttpClient) { }

  createRequest(request: MunchRequest): Observable<MunchRequest> {
    return this.http.post<MunchRequest>(this.requestUrl, request);
  }

  getRequests(): Observable<MunchRequest[]> {
    return this.http.get<MunchRequest[]>(this.requestUrl);
  }

  getRequest(requestId: string): Observable<MunchRequest> {
    if (requestId === this.req1._id) {
      return Observable.of(this.req1);
    }

    if (requestId === this.req2._id) {
      return Observable.of(this.req2);
    }

    return this.http.get<MunchRequest>(this.requestUrl  + '/' + requestId);
  }

  updateRequest(request: MunchRequest): Observable<MunchRequest> {
    return this.http.put<MunchRequest>(this.requestUrl + '/' + request._id, request);
  }

  getMockRequests(): Observable<MunchRequest[]> {
    return Observable.of([this.req1, this.req2]);
  }
}
