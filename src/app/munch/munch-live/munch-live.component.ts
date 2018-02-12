import { Component, OnInit } from '@angular/core';
import {MunchSession} from '../../_models/munch-session';

@Component({
  selector: 'app-munch-live',
  templateUrl: './munch-live.component.html',
  styleUrls: ['./munch-live.component.css']
})
export class MunchLiveComponent implements OnInit {
  session: MunchSession = {
    live: true,
    users: []
  };
  constructor() { }

  ngOnInit() {
  }

}
