import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-munch-matched',
  templateUrl: './munch-matched.component.html',
  styleUrls: ['./munch-matched.component.css']
})
export class MunchMatchedComponent implements OnInit {
  currentUser: User;
  hostUser: User;
  clientUser: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCurrentUser(true)
      .subscribe(user => {this.currentUser = user; });
  }


  // TODO: Remove the following 3 methods when wiring in real data
  getCurrentUser(host): Observable<User> {
    if (host === true) {
      return this.getHost();
    } else {
      return this.getClient();
    }
  }

  getHost(): Observable<User> {
    return this.userService.getMockUser1();
  }

  getClient(): Observable<User> {
    return this.userService.getMockUser2();
  }


}
