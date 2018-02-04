import { Injectable } from '@angular/core';
import {MunchSession} from './munch-session';

@Injectable()
export class SessionService {
  private mockMunchSession: MunchSession = {
    live: false,
    users: ['mockUser1', 'mockUser2'],
  };
  constructor() { }




}
