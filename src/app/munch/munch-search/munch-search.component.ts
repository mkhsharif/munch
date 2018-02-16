import {Component, OnInit} from '@angular/core';
import {Query} from '../../_models/query';
import {QueryService} from '../../_services/query.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as io from 'socket.io-client';
import {SessionService} from '../../_services/munch-session.service';
import {MunchSession} from '../../_models/munch-session';
import {User} from '../../_models/user';
import {UserService} from '../../_services/user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
    private userService: UserService,
    private router: Router
  ) { this.socket = io(); }

  ngOnInit() {
    this.getQuery();
    this.currentUser = this.userService.getCurrentUser();
    this.getAllQueries();
    // TODO: Make this its own function and check that the user is in the data
    const user = this.currentUser;
    const router = this.router;
    this.socket.on('new-match', function(session) {
      if (session.users.includes(user._id)) {
        router.navigate(['/munch/session/' + session._id]);
      }
    });
  }

  // TODO: Handle behavior on refresh
  deactivateQuery(): Observable<boolean> {
    if (this.query.searching === true) {
      this.query.searching = false;
      return this.queryService.updateQuery(this.query).map(
        (res: Query) => {
          if (res.searching === false) {
            console.log('Query set to false');
            return true;
          } else {
            console.log('Query NOT set to false');
            return false;
          }
        });
      }
  }

  // TODO: Look into pre loading with a guard
  private getQuery(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.queryService.getQuery(id)
      .subscribe(
        query => {
          this.query = query;
          this.query.searching = true;
          this.queryService.updateQuery(this.query).subscribe(
            updatedQuery => {
              if (updatedQuery.searching) {
                console.log('Query now searching');
              }
            }
          );
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
    // TODO: load all queries here
    for (const query of this.allQueries) {
      if (query.user !== this.currentUser._id && query.searching === true) {
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
        // TODO: make a user setting for gender.
        if (score >= 2) {
          console.log('match!');
          this.createSession(query.user);
          break;
        }
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
          this.router.navigate(['/munch/session/' + session._id]);
        }
      );
  }
}







