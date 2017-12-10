import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../user/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  get loggedIn(): boolean {
    return this.authService.loggedIn;
  }

  get userName(): string {
    return this.authService.userName;
  }
}
