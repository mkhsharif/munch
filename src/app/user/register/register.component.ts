import {Component} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
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

  registerUser(): void {
    this.userService.createUser(this.user)
      .subscribe(data => {
        this.router.navigate(['/dashboard']);
        console.log(this.user.userName + ' created');
      }, error => {
        this.loading = false;
        console.log('User not created!');
        console.log(error);
      });
  }

}
