import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  private usersUrl = '/api/users';

  private static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  // noinspection JSDeprecatedSymbols
  constructor(private http: HttpClient) { }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  // get("/api/users")
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  // post("/api/users")
  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, newUser);
  }

  // get("/api/users/:id")
  getUser(getUserId: string): Observable<User> {
    return this.http.get<User>(this.usersUrl  + '/' + getUserId);
  }

  // put("/api/users/:id")
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl + '/' + user._id, user);
  }
}
