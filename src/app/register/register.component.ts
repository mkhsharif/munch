import {Component, EventEmitter, Output} from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';
import { Router} from '@angular/router';
import {Genders} from '../_models/genders';
import {Diets} from '../_models/diets';
import {INTERESTS} from '../_models/interest-list';
import {Interest} from '../_models/interest';
import {AuthenticationService} from '../_services/authentication.service';



class SelectedGenders {
  genderType: Genders;
  selected: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})



export class RegisterComponent {
  diets: Diets[] = [Diets.ANY, Diets.HALAL, Diets.PESCATARIAN, Diets.VEGAN, Diets.VEGETARIAN];
  selectedDiet: Diets;
  genders: Genders[] = [Genders.MALE, Genders.FEMALE];
  selectedGender: Genders.MALE | Genders.FEMALE;
  registerShow: boolean;
  interest: Interest[] = INTERESTS;
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
    private userService: UserService,
    private authService: AuthenticationService) {}

  registerUser(): void {
    this.userService.createUser(this.user)
      .subscribe(data => {
        this.user.gender = this.selectedGender;
        this.user.diet = this.selectedDiet;
        this.authService.login(this.user.userName, this.user.password).subscribe();
        this.router.navigate(['/profile']);
        console.log(this.user.userName + ' created');
        console.log(this.user.password);
        console.log(this.user.gender);
        console.log(this.user.diet);
      }, error => {
        this.loading = false;
        console.log('User not created!');
        console.log(error);
      });
  }

  hideRegister() {
    this.registerEvent.emit(this.registerShow);
  }

  showPick(): void {
    console.log(this.user.gender);
    console.log(this.user.diet);
  }

  onSelectChangeGen(gender) {
    this.selectedGender = gender;
    this.user.gender = this.selectedGender;
  }

  onSelectChangeDiet(diet) {
    this.selectedDiet = diet;
    this.user.diet = this.selectedDiet;
  }
}
