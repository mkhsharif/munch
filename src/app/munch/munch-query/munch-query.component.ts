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
  query: MunchRequest = {
    user_id: '',
    searching: false,
    locationPreference: '',
    dietPreference: '',
    genderPreference: '',
    interestsPreference: ''
};

  constructor(
    private userService: UserService,
    private queryService: MunchRequestService,
    private router: Router) { }

  ngOnInit() {
  }

  handleQueryUpdated(query: MunchRequest): void {
    this.query.locationPreference = query.locationPreference;
    this.query.dietPreference = query.dietPreference;
    this.query.genderPreference = query.genderPreference;
    this.query.interestsPreference = query.interestsPreference;
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
