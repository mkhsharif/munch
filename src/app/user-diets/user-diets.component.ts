import { Component, OnInit } from '@angular/core';
import {Diets} from '../_models/diets';
import {User} from '../_models/user';
import {Observable} from 'rxjs/Observable';
import {Interest} from '../_models/interest';
import {UserInterest} from '../_models/user-interest';
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
   return this.userService.getUser('u1')
     .map((user: User) => {
       this.user = user;
       return this.user;
     });
  }

  updateDiet(): void {
    this.user.diet = this.selectedDiet;
    console.log('User updated diet: ' + this.user.diet);
  }
}

