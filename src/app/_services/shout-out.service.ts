import { Injectable } from '@angular/core';
import {ShoutOut} from '../_models/shout-out';
import {SHOUTOUTS} from '../dashboard/shout-outs/shout-out-list/mock-shout-outs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShoutOutService {
  private shoutoutsUrl = '/api/shoutouts';
  private static handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

  constructor(private http: HttpClient) { }

  getShoutOuts(): Observable<ShoutOut[]> {
    return this.http.get<ShoutOut[]>(this.shoutoutsUrl);
  }

  getShoutOut(id: string): Observable<ShoutOut> {
    const url = `${this.shoutoutsUrl}/${id}`;
    return this.http.get<ShoutOut>(url);
  }

  createShoutOut(shoutout: ShoutOut): Observable<ShoutOut> {
    return this.http.post<ShoutOut>(this.shoutoutsUrl, shoutout);
  }

  updateShoutOut(shoutout: ShoutOut): Observable<ShoutOut> {
    return this.http.put<ShoutOut>(this.shoutoutsUrl + '/' + shoutout._id, shoutout);
  }
}
