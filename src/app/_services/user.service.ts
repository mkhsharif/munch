import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  private usersUrl = '/api/users';

  private mock1: User = {
    _id: 'mockUser1',
    userName: 'a',
    firstName: 'a',
    lastName: 'a',
    password: 'a',
    email: 'a',
    phone: 'a',
    points: 0,
    friends: [],
    shoutouts: []
};

  private mock2: User = {
    _id: 'mockUser2',
    userName: 'b',
    firstName: 'b',
    lastName: 'b',
    password: 'b',
    email: 'b',
    phone: 'b',
    points: 0,
    friends: [],
    shoutouts: [],
  };

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
    if (getUserId === this.mock1._id) {
      return Observable.of(this.mock1);
    }

    if (getUserId === this.mock2._id) {
      return Observable.of(this.mock2);
    }

    return this.http.get<User>(this.usersUrl  + '/' + getUserId);
  }

  getMockUsers(): Observable<User[]> {
    return Observable.of([this.mock1, this.mock2]);
  }

  // put("/api/users/:id")
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl + '/' + user._id, user);
  }
}
