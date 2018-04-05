import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import {MunchSession} from '../_models/munch-session';
import {MunchLocation} from '../_models/munch-location';
import {ActivatedRoute} from '@angular/router';
import {SessionService} from '../_services/munch-session.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import {LocationService} from '../_services/location.service';

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

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private locationService: LocationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCurrentUser(false)
      .flatMap((user: User) => { // TODO: optimize this
        return this.getSession();
      }).flatMap((session: MunchSession) => {
        let client_id = '';
        if (session.user_ids[0] === session.host_id) {
          client_id = session.user_ids[1];
        } else {
          client_id = session.user_ids[0];
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
        console.log(data);
    }).subscribe();
  }


  // TODO: Remove the following 3 methods when wiring in real data
  getCurrentUser(host): Observable<User> {
    if (host === true) {
      return this.getHost().map((user: User) => {
        this.currentUser = user;
        return this.currentUser;
      });
    } else {
      return this.getClient().map((user: User) => {
        this.currentUser = user;
        return this.currentUser;
      });
    }
  }

  getHost(): Observable<User> {
    return this.userService.getMockUser1();
  }

  getClient(): Observable<User> {
    return this.userService.getMockUser2();
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


}
