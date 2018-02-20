import { Component, OnInit } from '@angular/core';
import {MunchSession} from '../../_models/munch-session';
import {User} from '../../_models/user';
import {SessionService} from '../../_services/munch-session.service';
import {UserService} from '../../_services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-munch-exit',
  templateUrl: './munch-exit.component.html',
  styleUrls: ['./munch-exit.component.css']
})
export class MunchExitComponent implements OnInit {
  session: MunchSession;
  currentUser: User;
  otherUser: User;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    this.getSession();
  }

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
                }
              );
            }
          }
        }, error => {
          SessionService.handleError(error);
        }
      );
  }

}
