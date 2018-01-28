import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {User} from './user';
import 'rxjs/add/operator/map';
import {NavigationBarComponent} from '../navigation-bar/navigation-bar.component';

@Injectable()
export class AuthenticationService {
  private authUrl = '/api/users/auth';
  constructor(private http: HttpClient) { }

  static logout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      console.log('Logging out ' + AuthenticationService.userName);
    }
    localStorage.removeItem('currentUser');
  }

  static get loggedIn(): boolean {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  static get userName(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return NavigationBarComponent.userName;
    }
  }

  static get user(): User {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser;
    }
  }

  login(username: string, password: string) {
    return this.http.post(this.authUrl, {
      userName: username, password: password
    }).map((response: HttpResponse<User>) => {
      if (response) {
        localStorage.setItem('currentUser', JSON.stringify(response));
        console.log('Data verified and saved for ' + username);
      }
      return response;
    });
  }
}
