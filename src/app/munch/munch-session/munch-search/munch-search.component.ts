import { Component, OnInit } from '@angular/core';
import {Query} from '../../../_models/query';
import {QueryService} from '../../../_services/query-service.service';



@Component({
  selector: 'app-munch-search',
  templateUrl: './munch-search.component.html',
  styleUrls: ['./munch-search.component.css']
})
export class MunchSearchComponent implements OnInit {


  input: Query = {
    user: '',
    status: '',
    locationPreference: 'Annex',
    dietPreference: 'N/A',
    genderPreference: 'Female',
    interestsPreference: 'Music'
  };

  constructor(
    private queryService: QueryService) { }
  ngOnInit() {
  }
  quickSearch() {
    const firstQuery = this.queryService.getMockQueries()[0];
    let score = 0;
    if (firstQuery.locationPreference === this.input.locationPreference) {
      score = score + 1;
    }
    if (firstQuery.dietPreference === this.input.dietPreference) {
      score = score + 1;
    }
    if (firstQuery.interestsPreference === this.input.interestsPreference) {
      score = score + 1;
    }
    // TodoComment make a user setting for gender.
    // Make data real ;)
    if (score >= 2) {
      console.log('match!');
    }

  }
}







