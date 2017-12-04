import { Component, OnInit } from '@angular/core';
import {PreferenceCategory} from '../../preferences/preference-category';
import {CATEGORIES} from '../../preferences/preference-category-list';

@Component({
  selector: 'app-query-overall',
  templateUrl: './query-overall.component.html',
  styleUrls: ['./query-overall.component.css']
})
export class QueryOverallComponent implements OnInit {

  selectedPreferenceCategory: PreferenceCategory;
  categories = CATEGORIES;
  constructor() { }

  ngOnInit() {
  }

  onSelect(preferenceCategory: PreferenceCategory): void {
    this.selectedPreferenceCategory = preferenceCategory;
  }
}
