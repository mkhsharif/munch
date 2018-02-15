import { Component, OnInit } from '@angular/core';
import {Query} from '../../_models/query';
import {UserService} from '../../_services/user.service';
import {QueryService} from '../../_services/query.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-munch-query',
  templateUrl: './munch-query.component.html',
  styleUrls: ['./munch-query.component.css']
})
export class MunchQueryComponent implements OnInit {
  query: Query = {
    user: '',
    searching: false,
    locationPreference: '',
    dietPreference: '',
    genderPreference: '',
    interestsPreference: ''
};

  constructor(
    private userService: UserService,
    private queryService: QueryService,
    private router: Router) { }

  ngOnInit() {
  }

  handleQueryUpdated(query: Query): void {
    this.query.locationPreference = query.locationPreference;
    this.query.dietPreference = query.dietPreference;
    this.query.genderPreference = query.genderPreference;
    this.query.interestsPreference = query.interestsPreference;
    console.log(query);
  }

  submitQuery(): void {
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.query.user = currentUser._id;
      this.queryService.createQuery(this.query)
        .subscribe(
          data => {
            this.query._id = data._id;
            console.log(this.query);
            this.router.navigate(['/munch/search/' + data._id]);
        }, error => {
           QueryService.handleError(error);
        }
      );
    }
  }
}
