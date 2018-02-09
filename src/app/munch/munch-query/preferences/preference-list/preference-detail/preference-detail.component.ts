import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Preference} from '../../preference';

@Component({
  selector: 'app-preference-detail',
  templateUrl: './preference-detail.component.html',
  styleUrls: ['./preference-detail.component.css']
})

export class PreferenceDetailComponent implements OnInit {
  @Input() preference: Preference;
  @Output() optionUpdated: EventEmitter<string> = new EventEmitter();
  selectedOption: string;

  constructor() { }

  ngOnInit() { }

  onSelectOption(option: string): void {
    this.selectedOption = option;
    this.optionUpdated.emit(this.selectedOption);
  }
}
