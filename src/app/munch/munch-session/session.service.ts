import { Injectable } from '@angular/core';
import {MunchSession} from './munch-session';

@Injectable()
export class SessionService {
  private mockMunchSession: MunchSession = {
    _id: 'fakeSession1',
    live: false,
    users: ['mockUser1', 'mockUser2'],
  };
  constructor() { }

  getSession(getSessionId: string) {
    if (getSessionId === this.mockMunchSession._id) {
      return this.mockMunchSession;
    }
  }
}
