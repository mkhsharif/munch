import { Component, OnInit } from '@angular/core';
import {MunchSession} from '../munch-session';

@Component({
  selector: 'app-munch-live',
  templateUrl: './munch-live.component.html',
  styleUrls: ['./munch-live.component.css']
})
export class MunchLiveComponent implements OnInit {
  session: MunchSession = {
    location: 'Annex',
    live: true,
    status: 'Sitting Down',
    message: 'I\'m Wearing a Black Hoodie!'
  };
  constructor() { }

  ngOnInit() {
  }

}
