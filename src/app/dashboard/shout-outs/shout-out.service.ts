import { Injectable } from '@angular/core';
import {ShoutOut} from './shout-out';
import {SHOUTOUTS} from './shout-out-list/mock-shout-outs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ShoutOutService {

  constructor() { }

  getShoutOuts(): Observable<ShoutOut[]> {
    return of(SHOUTOUTS);
  }

  getShoutOut(id: string): Observable<ShoutOut> {
    return of(SHOUTOUTS.find(shoutout => shoutout._id === id));
  }
}
