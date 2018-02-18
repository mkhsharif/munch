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
  otherUser: User;
  private socket: SocketIOClient.Socket;
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private userService: UserService,
    private router: Router
  ) { this.socket = io(); }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    this.getSession();
    this.setupSocket();
  }

  // TODO: Clean this up
  private getSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sessionService.getSession(id)
      .subscribe(
        session => {
          this.session = session;
          console.log(this.session);
          for (const userId of this.session.users) {
            if (userId !== this.currentUser._id) {
              this.userService.getUser(userId).subscribe(
                user => {
                  this.otherUser = user;
                  console.log('Matched ' + this.otherUser._id);
                }
              );
            }
          }
        }, error => {
          SessionService.handleError(error);
        }
      );
  }

  private setupSocket() {
    this.socket.on('connect', () => {
      console.log('socket: ' + this.socket.id);
      }
    );

    this.socket.on('disconnect', () => {
      console.log('disconnect');
    });

    this.socket.on('user-exit', (userId) => {
      if (userId === this.otherUser._id) {
        this.router.navigate(['/munch/exit/' + this.session._id])
          .then( () => {
            console.log('leaving session');
          }
        );
      }
    });
  }


  exitSession() {
    console.log(this.currentUser._id + ' leaving');
    this.socket.emit('end-session', this.currentUser._id);
    this.router.navigate(['/munch/exit/' + this.session._id]);
  }
}
