import { Component, OnInit } from '@angular/core';
import {Preference} from '../preference';
import {CATEGORIES} from '../preference-list';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit {

  selectedPreference: Preference;
  categories = CATEGORIES;
  constructor() { }

  ngOnInit() {
  }
  onSelect(preference: Preference): void {
    this.selectedPreference = preference;
  }

}
