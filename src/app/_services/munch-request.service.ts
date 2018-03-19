import { Injectable } from '@angular/core';
import { MunchRequest } from '../_models/munch-request';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MunchRequestService {
  private requestUrl = '/api/requests';

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
    return this.http.get<MunchRequest>(this.requestUrl  + '/' + requestId);
  }

  updateRequest(request: MunchRequest): Observable<MunchRequest> {
    return this.http.put<MunchRequest>(this.requestUrl + '/' + request._id, request);
  }
}
