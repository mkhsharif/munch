import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import {MunchSession} from '../_models/munch-session';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionService} from '../_services/munch-session.service';
import {MunchLocation} from '../_models/munch-location';
import {LocationService} from '../_services/location.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import {SocketService} from '../_services/socket.service';


@Component({
  selector: 'app-munch-matched',
  templateUrl: './munch-matched.component.html',
  styleUrls: ['./munch-matched.component.css']
})
export class MunchMatchedComponent implements OnInit {
  currentUser: User;
  hostUser: User;
  clientUser: User;
  session: MunchSession;
  location: MunchLocation;
  isHost: boolean;
  pin: string;


  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.initIo();
    this.getCurrentUser()
      .flatMap(() => {
        return this.getSession();
      }).flatMap((session: MunchSession) => {
        let client_id = '';
        if (session.user_descriptions[0].user_id === session.host_id) {
          client_id = session.user_descriptions[1].user_id;
        } else {
          client_id = session.user_descriptions[0].user_id;
        }
        this.getLocation(session.location_id).subscribe();
        return Observable.forkJoin([
          this.userService.getUser(session.host_id),
          this.userService.getUser(client_id),
        ]);
      }).map((data: User[]) => {
        this.hostUser = data[0];
        this.clientUser = data[1];
        this.isHost = this.hostUser._id === this.currentUser._id;
    }).subscribe();
  }

  initIo(): void {
    this.socketService.initSocket();

    this.socketService.onSessionJoined()
      .subscribe((session_id: string) => {
        console.log('Client joined session ' + session_id);
        this.router.navigate(['/munch/active/' + session_id])
          .then(() => {
            console.log('Navigating to active session ' + session_id);
          });
      });
  }

  getCurrentUser(): Observable<User> {
    const id = this.userService.getCurrentUser()._id;
    return this.userService.getUser(id).map((user: User) => {
      this.currentUser = user;
      return this.currentUser;
    });
  }

  getSession(): Observable<MunchSession> {
    const id = this.route.snapshot.paramMap.get('id');
    return this.sessionService.getSession(id)
      .map((session: MunchSession) => {
        this.session = session;
        return this.session;
    });
  }

  getLocation(id: string): Observable<MunchLocation> {
    return this.locationService.getLocation(id)
      .map((location: MunchLocation) => {
        this.location = location;
        return this.location;
    });
  }

  joinSession(): void {
    if (this.pin.toString() === this.session.pin) {
      if (this.session._id !== 's1') {
        this.session.active = true;
        this.session.pending = false;
        this.sessionService.updateSession(this.session)
          .subscribe((session: MunchSession) => {
            this.router.navigate(['/munch/active/' + session._id])
              .then(() => {
                this.socketService.joinSession(session);
                console.log('Navigating to active session ' + session._id);
              });
        });
      } else {
        this.router.navigate(['/munch/active/' + this.session._id])
          .then(() => {
            this.socketService.joinSession(this.session);
            console.log('Navigating to active session ' + this.session._id);
          });
      }

    } else {
      console.log('Wrong pin');
    }
  }


}
