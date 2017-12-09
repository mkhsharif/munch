import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService} from '../../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    AuthenticationService.logout();
    this.returnUrl = '/dashboard';
  }

  login(): void {
    this.loading = true;
    console.log('Attempting Login');
    this.authenticationService.login(this.user.userName, this.user.password)
      .subscribe(
        data => {
          console.log('Logging in');
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log('Failure to log in');
          console.log(error);
          this.loading = false;
        }
      );
  }

}
