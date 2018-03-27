import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-munch-setup',
  templateUrl: './munch-setup.component.html',
  styleUrls: ['./munch-setup.component.css']
})
export class MunchSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // State starts at 1
  var state = 1;

  function incrementState() {
    // increment state by 1
    // select element with class name (state + 1)
    // add show to that class
    // add hide to element with class name (state)
  }

  function decrementState() {
    // decrement state by 1
    // select element with class name (state - 1)
    // add show to that class
    // add hide to element with class name (state)
  }
}
