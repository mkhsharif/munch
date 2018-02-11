import { Component, OnInit } from '@angular/core';
import {Query} from '../../../_models/query';
import {QueryService} from '../../../_services/query.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-munch-search',
  templateUrl: './munch-search.component.html',
  styleUrls: ['./munch-search.component.css']
})

export class MunchSearchComponent implements OnInit {
  query: Query;

  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getQuery();
  }

  getQuery(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.queryService.getQuery(id)
      .subscribe(
        query => {
          this.query = query;
          console.log(this.query);
        }, error => {
          QueryService.handleError(error);
        });
  }

  quickSearch() {
    const firstQuery = this.queryService.getQueries()[0];
    let score = 0;
    if (firstQuery.locationPreference === this.query.locationPreference) {
      score = score + 1;
    }
    if (firstQuery.dietPreference === this.query.dietPreference) {
      score = score + 1;
    }
    if (firstQuery.interestsPreference === this.query.interestsPreference) {
      score = score + 1;
    }
    // TodoComment make a user setting for gender.
    // Make data real ;)
    if (score >= 2) {
      console.log('match!');
    }

  }
}







