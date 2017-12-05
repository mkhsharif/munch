import {Component} from '@angular/core';
import {User} from '../users/user';
import {UserService} from '../users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent {
  user: User = {
    firstName: 'mock',
    lastName: 'mockington',
    userName: 'mock1',
    email: 'mock@mock.com',
    phone: '555-5555',
    points: 0,
    pword: 'mock',
    friends: {},
    shoutouts: {},
    current_session: {}
  };

  constructor(private userService: UserService) {}

  createUser(): void {
    // this.userService.createUser(this.user);
    console.log(this.user.userName + ' created');
  }

}
