import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Preference} from '../preference';
import {Query} from '../../query';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit {
  @Input() query: Query;
  @Output() queryChange: EventEmitter<Query> = new EventEmitter<Query>();
  selectedPreference: Preference;

  toggleChoice(preference: Preference, option: string): void {
    if (this.query) {
      const index: number = preference.choices.indexOf(option);
      if (index !== -1) {
        preference.choices.splice(index, 1);
      } else {
        preference.choices.push(option);
      }
    }
  }

  // make toggle for each preference

  constructor() { }

  ngOnInit() {
  }
  onSelect(preference: Preference): void {
    if (this.selectedPreference === preference) {
      this.selectedPreference = null;
    } else {
      this.selectedPreference = preference;
    }
  }



}
