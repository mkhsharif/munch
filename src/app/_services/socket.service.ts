import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import {MunchSession} from '../_models/munch-session';

@Injectable()
export class SocketService {
  private socket: SocketIOClient.Socket;

  constructor() { }

  initSocket(): void {
    console.log('Initializing socket');
    this.socket = io();
  }

  createMatch(session: MunchSession, user_ids: string[]): void {
    console.log('Creating socket match with session id ' + session._id);
    this.socket.emit('create-match', {session_id: session._id, user_ids: user_ids});
  }

  onMatchFound(): Observable<any> {
    return new Observable<string>(
      observer => {
        this.socket.on('match-found', (data) => {
          observer.next(data);
          console.log('Received notification that session ' + data.session_id + 'is built and pending ');
        });
    });
  }

  activateSession(session: MunchSession): void {
    console.log('Sending socket activate message with session id ' + session._id);
    this.socket.emit('activate-session', session._id);
  }

  onSessionActivated(): Observable<string> {
    return new Observable<string>(
      observer => {
        this.socket.on('session-activated', (data: string) => {
          observer.next(data);
          console.log('Received notification that session ' + data + 'is active ');
        });
      }
    );
  }

}
