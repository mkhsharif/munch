import { Component, OnInit } from '@angular/core';
import {MunchRequest} from '../../_models/munch-request';
import {UserService} from '../../_services/user.service';
import {MunchRequestService} from '../../_services/munch-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-munch-query',
  templateUrl: './munch-query.component.html',
  styleUrls: ['./munch-query.component.css']
})
export class MunchQueryComponent implements OnInit {
  query: MunchRequest;

  constructor(
    private userService: UserService,
    private queryService: MunchRequestService,
    private router: Router) { }

  ngOnInit() {
  }

  handleQueryUpdated(query: MunchRequest): void {
    console.log(query);
  }

  submitQuery(): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.query.user_id = currentUser._id;
      this.queryService.createRequest(this.query)
        .subscribe(
          data => {
            this.query._id = data._id;
            console.log(this.query);
            this.router.navigate(['/munch/search/' + data._id]);
        }, error => {
           MunchRequestService.handleError(error);
        }
      );
    }
  }
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
