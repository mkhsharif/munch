import { Injectable } from '@angular/core';
import {MunchSession} from './munch-session';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class SessionService {
  private mockMunchSession: MunchSession = {
    _id: 'fakeSession1',
    live: false,
    users: ['mockUser1', 'mockUser2'],
  };
  constructor() { }

  getSession(getSessionId: string): Observable<MunchSession> {
    if (getSessionId === this.mockMunchSession._id) {
      return Observable.of(this.mockMunchSession);
    }
  }
}
