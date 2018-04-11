import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService} from '../_services/authentication.service';
import {User} from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loading = false;
  returnUrl: string;
  registerShow: boolean;
  @Output() registerEvent = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = '/home';
  }

  login(): void {
    this.loading = true;
    console.log('Attempting Login');
    this.authenticationService.login(this.user.userName, this.user.password)
      .subscribe((data: User) => {
          console.log('Logging in');
          console.log(data);
          this.router.navigate(['/profile']).then(() => {
            console.log('logged in');
          });
        },
        error => {
          console.log('Failure to log in');
          console.log(error);
          this.loading = false;
        }
      );
  }

  showRegister() {
    this.registerEvent.emit(this.registerShow);
  }

}
