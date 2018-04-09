import { Component, OnInit } from '@angular/core';
import {Diets} from '../_models/diets';
import {User} from '../_models/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-user-diets',
  templateUrl: './user-diets.component.html',
  styleUrls: ['./user-diets.component.css']
})

export class UserDietsComponent implements OnInit {

  user: User;
  diets: Diets[] = [Diets.ANY, Diets.VEGETARIAN, Diets.HALAL, Diets.PESCATARIAN, Diets.VEGAN];
  selectedDiet: Diets;

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.getUser().subscribe();
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

