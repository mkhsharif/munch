import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {UserInterest} from '../_models/user-interest';

@Injectable()
export class UserService {
  private usersUrl = '/api/users';

  user1: User = {
    _id: 'u1',
    userName: 'u1',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    points: 0,
    friend_ids: [],
    shoutout_ids: [],
    avatarUrl: '',
    interests: [],
    diet_id: '',
  };

  user2: User = {
    _id: 'u2',
    userName: 'u2',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    points: 0,
    friend_ids: [],
    shoutout_ids: [],
    avatarUrl: '',
    interests: [],
    diet_id: '',
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
    return this.http.get<User>(this.usersUrl  + '/' + getUserId);
  }

  // put("/api/users/:id")
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.usersUrl + '/' + user._id, user);
  }

  getMockUser1(): Observable<User> {
    return Observable.of(this.user1);
  }

  getMockUser2(): Observable<User> {
    return Observable.of(this.user2);
  }

  getMockUsers(): Observable<User[]> {
    return Observable.of([this.user1, this.user2]);
  }
}
