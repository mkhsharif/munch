import { Component, OnInit } from '@angular/core';
import {MunchSession} from '../../_models/munch-session';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionService} from '../../_services/munch-session.service';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/user';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-munch-live',
  templateUrl: './munch-live.component.html',
  styleUrls: ['./munch-live.component.css']
})
export class MunchLiveComponent implements OnInit {
  session: MunchSession;
  currentUser: User;
  private socket: SocketIOClient.Socket;
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private userService: UserService,
    private router: Router
  ) { this.socket = io(); }

  ngOnInit() {
    this.getSession();
  }

  private getSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sessionService.getSession(id)
      .subscribe(
        session => {
          this.session = session;
          console.log(this.session);
          this.load();
        }, error => {
          SessionService.handleError(error);
        }
      );
  }

  private load() {
    this.currentUser = this.userService.getCurrentUser();
    this.socket.on('connect', this.onConnect);
  }

  private onConnect(socket) {
    console.log('Connected ' + this.currentUser._id + ' to session ' + this.session._id);
    socket.on('disconnect', this.onDisconnect());
  }

  private onDisconnect() {
    console.log('Disconnected ' + this.currentUser._id + ' from session ' + this.session._id);
  }

  exitSession() {
    console.log(this.currentUser._id + ' leaving');
    this.router.navigate(['/munch-setup/']);
  }
}
