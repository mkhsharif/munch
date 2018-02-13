import { Component, OnInit } from '@angular/core';
import {Query} from '../../_models/query';
import {QueryService} from '../../_services/query.service';
import {ActivatedRoute} from '@angular/router';
import * as io from 'socket.io-client';
import {SessionService} from '../../_services/munch-session.service';
import {MunchSession} from '../../_models/munch-session';
import {User} from '../../_models/user';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-munch-search',
  templateUrl: './munch-search.component.html',
  styleUrls: ['./munch-search.component.css']
})

export class MunchSearchComponent implements OnInit {
  query: Query;
  currentUser: User;
  allQueries: Query[];
  private socket: SocketIOClient.Socket;

  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private userService: UserService
  ) { this.socket = io(); }

  ngOnInit() {
    this.getQuery();
    this.currentUser = this.userService.getCurrentUser();
    this.getAllQueries();
    // TODO: Make this its own function and check that the user is in the data
    this.socket.on('new-match',
      function (data) {
        console.log(data);
    });
  }

  private getQuery(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.queryService.getQuery(id)
      .subscribe(
        query => {
          this.query = query;
          console.log(this.query);
        }, error => {
          QueryService.handleError(error);
        });
  }

  private getAllQueries(): void {
    this.queryService.getQueries()
      .subscribe(data => {
        this.allQueries = data;
      });
  }

  quickSearch() {
    for (const query of this.allQueries) {
      console.log(query.locationPreference);
      let score = 0;
      if (query.locationPreference === this.query.locationPreference) {
        score = score + 1;
      }
      if (query.dietPreference === this.query.dietPreference) {
        score = score + 1;
      }
      if (query.interestsPreference === this.query.interestsPreference) {
        score = score + 1;
      }
      // TodoComment make a user setting for gender.
      // Make data real ;)
      if (score >= 2) {
        console.log('match!');
        this.createSession(query.user);
        break;
      }
    }
  }

  private createSession(matchedUserId: string) {
    const newSession: MunchSession = {
      live: false,
      users: [matchedUserId, this.currentUser._id]
    };
    this.sessionService.createSession(newSession)
      .subscribe(
        session => {
          this.socket.emit('create-match', session);
        }
      );
  }
}







