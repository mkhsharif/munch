import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Diets} from '../_models/diets';
import {User} from '../_models/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../_services/user.service';
import {Genders} from '../_models/genders';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  user: User;
  diets: Diets[] = [Diets.ANY, Diets.VEGETARIAN, Diets.HALAL, Diets.PESCATARIAN, Diets.VEGAN];
  selectedDiet: Diets;
  genders: Genders[] = [Genders.MALE, Genders.FEMALE];
  selectedGender: Genders.MALE | Genders.FEMALE;


  constructor(public authService: AuthenticationService,
              public userService: UserService,
              public snackBar: MatSnackBar,
              private router: Router) {}

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
        this.selectedDiet = user.diet;
        this.selectedGender = user.gender;
        return this.user;
      });
  }

  updateSettings(): void {
    console.log('Previous diet:' + this.user.diet);
    console.log('Previous gender:' + this.user.gender);
    this.user.diet = this.selectedDiet;
    this.user.gender = this.selectedGender;
    this.userService.updateUser(this.user).subscribe(() => {
       console.log('User updated diet: ' + this.user.diet);
      console.log('User updated gender: ' + this.user.gender);
      });
    }

  openSnackBar() {
    this.snackBar.open('Preferences Updated!', 'Go Munch', {
      duration: 5000,
    });

    this.snackBar._openedSnackBarRef.onAction().subscribe(() => {
      this.router.navigate(['/munch/setup']);
    });
  }
}






