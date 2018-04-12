import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  registerShowing: boolean;

  constructor() { }

  ngOnInit() {
    $('html').css('background-color', 'darkorange');
  }

  displayRegister1($event) {
    this.registerShowing = !$event;
  }

  displayRegister2($event) {
    this.registerShowing = $event;
  }
}
