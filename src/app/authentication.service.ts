import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  private authUrl = '/api/users/auth';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(this.authUrl, { userName: username, password: password})
      .subscribe((response: Response) => {
        const user = response.json();
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
