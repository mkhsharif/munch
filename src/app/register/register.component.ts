import {Component} from '@angular/core';
import {User} from '../users/user';
import {UserService} from '../users/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent {
  user: User = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    points: 0,
    password: '',
    friends: [],
    shoutouts: []
  };
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService) {}

  register(): void {
    // this.userService.register(this.user);
    console.log(this.user.userName + ' created');
  }

}
