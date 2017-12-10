import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private authUrl = '/api/users/auth';
  constructor(private http: HttpClient) { }

  static logout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      console.log('Logging out ' + currentUser.userName);
    }
    localStorage.removeItem('currentUser');
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

  get loggedIn(): boolean {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  get userName(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.userName;
    }
  }
}
