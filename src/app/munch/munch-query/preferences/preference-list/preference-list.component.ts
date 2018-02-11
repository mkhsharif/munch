import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Preference} from '../../../../models/preference';
import {Query} from '../../../../models/query';
import {DIETPREFERENCE, GENDERPREFERENCE, INTERESTSPREFERENCE, LOCATIONPREFERENCE} from '../../../../models/preference-list';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit {
  @Input() query: Query;
  @Output() queryChange: EventEmitter<Query> = new EventEmitter<Query>();
  locationPreference = LOCATIONPREFERENCE;
  genderPreference = GENDERPREFERENCE;
  dietPreference = DIETPREFERENCE;
  interestsPreference = INTERESTSPREFERENCE;

  handleOptionUpdated(option: string, preference: Preference) {
    console.log(option);
    if (preference.name === this.locationPreference.name) {
      this.query.locationPreference = option;
    } else if (preference.name === this.genderPreference.name) {
      this.query.genderPreference = option;
    } else if (preference.name === this.dietPreference.name) {
      this.query.dietPreference = option;
    } else if (preference.name === this.interestsPreference.name) {
      this.query.interestsPreference = option;
    }
    this.queryChange.emit(this.query);
  }
  constructor() { }

  ngOnInit() {
  }

}
