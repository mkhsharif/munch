import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../models/user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get loggedIn(): boolean {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  get userName(): string {
    return JSON.parse(localStorage.getItem('currentUser')).userName;
  }
}
