import { Component, OnInit } from '@angular/core';
import {MunchRequest} from '../_models/munch-request';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {MunchRequestService} from '../_services/munch-request.service';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.css']
})
export class WaitingPageComponent implements OnInit {

  request: MunchRequest;
  requests: MunchRequest[];
  constructor(
    private route: ActivatedRoute,
    private requestService: MunchRequestService
  ) { }

  ngOnInit() {
    this.getRequest().subscribe();
    this.getRequests().subscribe();
  }

  getRequest(): Observable<MunchRequest> {
    const id = this.route.snapshot.paramMap.get('id');
    return this.requestService.getRequest(id)
      .map((request: MunchRequest) => {
        this.request = request;
        return this.request;
    });
  }

  getRequests(): Observable<MunchRequest[]> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'r1' || id === 'r2') {
      console.log('Getting Mock Requests');
      return this.requestService.getMockRequests()
        .map((requests: MunchRequest[]) => {
          this.requests = requests;
          return this.requests;
        });
    } else {
      return this.requestService.getRequests() // TODO: revert this from mock
        .map((requests: MunchRequest[]) => {
          this.requests = requests;
          return this.requests;
        });
    }

  }

}
