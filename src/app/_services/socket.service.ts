import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
import {MunchSession} from '../_models/munch-session';
import {observable} from 'rxjs/symbol/observable';

@Injectable()
export class SocketService {
  private socket: SocketIOClient.Socket;

  constructor() { }

  initSocket(): void {
    console.log('Initializing socket');
    this.socket = io();
  }

  createMatch(session: MunchSession): void {
    console.log('Sending socket match with session id ' + session._id);
    this.socket.emit('create-match', session._id);
  }

  onNewMatch(): Observable<string> {
    return new Observable<string>(
      observer => {
        this.socket.on('new-match', (data: string) => observer.next(data));
    });
  }

  joinSession(session: MunchSession): void {
    console.log('Sending socket join message with session id ' + session._id);
    this.socket.emit('join-session', session._id);
  }

  onSessionJoined(): Observable<string> {
    return new Observable<string>(
      observer => {
        this.socket.on('session-joined', (data: string) => {
          observer.next(data);
          console.log('Received join request for session');
        });
      }
    );
  }

}
