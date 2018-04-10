import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Diets} from '../_models/diets';
import {User} from '../_models/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../_services/user.service';


@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  user: User;
  diets: Diets[] = [Diets.ANY, Diets.VEGETARIAN, Diets.HALAL, Diets.PESCATARIAN, Diets.VEGAN];
  selectedDiet: Diets;


  constructor(public authService: AuthenticationService,
              public userService: UserService) {}

  ngOnInit() {
    console.log('settings');
    this.getUser().subscribe();
  }

  logout() {
    this.authService.logout();
  }

  getUser(): Observable<User> {
    const id: string = this.userService.getCurrentUser()._id;
    return this.userService.getUser(id)
      .map((user: User) => {
        this.user = user;
        return this.user;
      });
  }

  updateDiet(): void {
    console.log('Previous diet:' + this.user.diet);
    this.user.diet = this.selectedDiet;
    this.userService.updateUser(this.user).subscribe(() => {
       console.log('User updated diet: ' + this.user.diet);
      });
    }
}






