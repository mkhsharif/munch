import { Injectable } from '@angular/core';
import {MunchSession} from '../munch/munch-session/munch-session';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SessionService {
  private sessionUrl = '/api/sessions';

  private mockMunchSession: MunchSession = {
    _id: 'fakeSession1',
    live: false,
    users: ['mockUser1', 'mockUser2'],
  };

  private static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  constructor(private http: HttpClient) { }

  getSession(getSessionId: string): Observable<MunchSession> {
    if (getSessionId === this.mockMunchSession._id) {
      return Observable.of(this.mockMunchSession);
    }
  }
}
