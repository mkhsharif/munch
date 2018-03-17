import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Preference} from '../../../../_models/preference';
import {MunchRequest} from '../../../../_models/munch-request';
import {DIETPREFERENCE, GENDERPREFERENCE, INTERESTSPREFERENCE, LOCATIONPREFERENCE} from '../../../../_models/preference-list';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit {
  @Input() query: MunchRequest;
  @Output() queryChange: EventEmitter<MunchRequest> = new EventEmitter<MunchRequest>();
  locationPreference = LOCATIONPREFERENCE;
  genderPreference = GENDERPREFERENCE;
  dietPreference = DIETPREFERENCE;
  interestsPreference = INTERESTSPREFERENCE;

  // TODO: fix bug where only one option is selected a time in entire page
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
