import { Component, OnInit, Input } from '@angular/core';
import { Preference} from '../preference';

@Component({
  selector: 'app-preference-detail',
  templateUrl: './preference-detail.component.html',
  styleUrls: ['./preference-detail.component.css']
})

export class PreferenceDetailComponent implements OnInit {
  @Input() preference: Preference;

  constructor() { }

  ngOnInit() {
  }

}
