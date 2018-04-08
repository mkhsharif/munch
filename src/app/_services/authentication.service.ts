import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {User} from '../_models/user';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthenticationService {
  private authUrl = '/api/users/auth';
  // TODO: remove mock login when testing is complete
  constructor(private http: HttpClient) { }

  logout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      console.log('Logging out ' + currentUser.userName);
    }
    localStorage.removeItem('currentUser');
  }

  login(username: string, password: string): Observable<User> | Observable<HttpResponse<User>> {
    const u1: User = UserService.user1;
    if (username === 'test') {
      localStorage.setItem('currentUser', JSON.stringify(u1));
      console.log('Test user logged in ' + u1.userName);
      return Observable.of(u1);
    } else {
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
}
