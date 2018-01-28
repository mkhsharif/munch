import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../user/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  static get loggedIn(): boolean {
    return AuthenticationService.loggedIn;
  }

  static get userName(): string {
    return AuthenticationService.userName;
  }
}
