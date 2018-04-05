import {Component, EventEmitter, Output} from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent {

  registerShow: boolean;
  @Output() registerEvent = new EventEmitter<boolean>();

  user: User = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: '',
    points: 0,
    password: '',
    friend_ids: [],
    shoutout_ids: [],
    avatarUrl: '',
    interests: [],
    diet: null,
    gender: null
  };
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService) {}

  registerUser(): void {
    this.userService.createUser(this.user)
      .subscribe(data => {
        this.router.navigate(['/homepage']);
        console.log(this.user.userName + ' created');
      }, error => {
        this.loading = false;
        console.log('User not created!');
        console.log(error);
      });
  }

  hideRegister() {
    this.registerEvent.emit(this.registerShow);
  }

}