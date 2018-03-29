import { Component, OnInit } from '@angular/core';
import {MunchRequest} from '../_models/munch-request';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.css']
})
export class WaitingPageComponent implements OnInit {

  request: MunchRequest;
  constructor() { }

  ngOnInit() {
  }

}
