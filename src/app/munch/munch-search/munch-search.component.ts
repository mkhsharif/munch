import { Component, OnInit } from '@angular/core';
import {Query} from '../../_models/query';
import {QueryService} from '../../_services/query.service';
import {ActivatedRoute} from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-munch-search',
  templateUrl: './munch-search.component.html',
  styleUrls: ['./munch-search.component.css']
})

export class MunchSearchComponent implements OnInit {
  query: Query;
  private socket: SocketIOClient.Socket;

  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute
  ) { this.socket = io(); }

  ngOnInit() {
    this.getQuery();
    this.socket.on('new-message', function (data) {
      console.log(data);
    });
  }

  getQuery(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.socket.emit('save-message', {message: 'test'});
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







