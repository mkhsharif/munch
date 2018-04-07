import { Component, OnInit } from '@angular/core';
import {Diets} from '../_models/diets';

@Component({
  selector: 'app-user-diets',
  templateUrl: './user-diets.component.html',
  styleUrls: ['./user-diets.component.css']
})
export class UserDietsComponent implements OnInit {
  diets: Diets[] = [Diets.ANY, Diets.VEGETARIAN, Diets.HALAL, Diets.PESCATARIAN, Diets.VEGAN];
  selectedDiet: Diets;

  constructor() { }

  ngOnInit() {
  }

}
