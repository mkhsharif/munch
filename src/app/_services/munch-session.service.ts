import { Injectable } from '@angular/core';
import {MunchSession} from '../_models/munch-session';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SessionService {
  private sessionUrl = '/api/sessions';

  session1: MunchSession = {
    _id: 's1',
    host_id: 'u1',
    user_ids: ['u1', 'u2'],
    location_id: 'l1',
    pending: true,
    active: true,
    pin: '1234',
    common_interest_ids: [],
    time_completed: null
  };

  static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  constructor(private http: HttpClient) { }

  getSession(getSessionId: string): Observable<MunchSession> {
    if (getSessionId === 's1') {
      return Observable.of(this.session1);
    }
    return this.http.get<MunchSession>(this.sessionUrl + '/' + getSessionId);
  }

  createSession(munchSession: MunchSession): Observable<MunchSession> {
    return this.http.post<MunchSession>(this.sessionUrl, munchSession);
  }

  updateSession(munchSession: MunchSession): Observable<MunchSession> {
    console.log('update');
    return this.http.put<MunchSession>(this.sessionUrl + '/' + munchSession._id, munchSession);
  }

}
