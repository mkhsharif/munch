import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  registerShowing: boolean;

  constructor() { }

  ngOnInit() {
  }

  displayRegister1($event) {
    this.registerShowing = !$event;
  }

  displayRegister2($event) {
    this.registerShowing = $event;
  }

}
