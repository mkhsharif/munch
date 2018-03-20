import { Component, OnInit } from '@angular/core';
import {MunchSession} from '../_models/munch-session';

@Component({
  selector: 'app-munch-matched-host',
  templateUrl: './munch-matched-host.component.html',
  styleUrls: ['./munch-matched-host.component.css']
})
export class MunchMatchedHostComponent implements OnInit {

  // TODO: update this to use a service
  munchSession: MunchSession = {
    _id: 's1',
    host_id: 'u1',
    user_ids: ['u1', 'u2'],
    location_id: 'l1',
    pending: true,
    active: true
  };
  constructor() { }

  ngOnInit() {
  }

}
