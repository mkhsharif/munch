import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private usersUrl = '/api/users';
  private static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
  // noinspection JSDeprecatedSymbols
  constructor(private http: Http) { }

  // get("/api/users")
  getUsers(): Promise<void | User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(UserService.handleError);
  }

  // post("/api/users")
  createUser(newUser: User): Promise<void | User> {
    return this.http.post(this.usersUrl, newUser)
      .toPromise()
      .then(response => response.json() as User)
      .catch(UserService.handleError);
  }

  // get("/api/users/:id")
  getUser(): Promise<void | User> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User)
      .catch(UserService.handleError);
  }

  // delete("/api/users/:id")
  deleteUser(delUserId: String): Promise<void | String> {
    return this.http.delete(this.usersUrl + '/' + delUserId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(UserService.handleError);
  }

  // put("/api/users/:id")
  updateUser(putUser: User): Promise<void | User> {
    const putUrl = this.usersUrl + '/' + putUser._id;
    return this.http.put(putUrl, putUser)
      .toPromise()
      .then(response => response.json() as User)
      .catch(UserService.handleError);
  }
}
