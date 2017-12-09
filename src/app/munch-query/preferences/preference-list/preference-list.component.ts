import {Component, Input, OnInit} from '@angular/core';
import {Preference} from '../preference';
import {Query} from '../../query';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit {
  @Input() query: Query;
  selectedPreference: Preference;

  toggleChoice(preference: Preference, option: string): void {
    if (this.query) {
      if (preference.choices.has(option)) {
        preference.choices.delete(option);
      } else {
        preference.choices.add(option);
      }
    }
  }

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
