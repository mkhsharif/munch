import { Component, OnInit } from '@angular/core';
import {SHOUTOUTS} from './mock-shout-outs';

@Component({
  selector: 'app-shout-out-list',
  templateUrl: './shout-out-list.component.html',
  styleUrls: ['./shout-out-list.component.css']
})
export class ShoutOutListComponent implements OnInit {
  shoutouts = SHOUTOUTS;
  constructor() { }

  ngOnInit() {
  }

}
