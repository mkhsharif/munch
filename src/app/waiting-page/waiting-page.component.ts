import { Component, OnInit } from '@angular/core';
import {MunchRequest} from '../_models/munch-request';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {MunchRequestService} from '../_services/munch-request.service';
import {SocketService} from '../_services/socket.service';
import {SessionService} from '../_services/munch-session.service';
import {MunchSession} from '../_models/munch-session';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.css']
})
export class WaitingPageComponent implements OnInit {

  request: MunchRequest;
  requests: MunchRequest[];
  cron: Observable<MunchRequest>;
  constructor(
    private route: ActivatedRoute,
    private requestService: MunchRequestService,
    private socketService: SocketService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initIo();
    this.getRequest().subscribe();
    this.getRequests().subscribe();
  }

  initIo(): void {
    this.socketService.initSocket();

    this.socketService.onNewMatch()
      .subscribe((session_id: string) => {
        console.log('client to session ' + session_id);
      });
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
    let observableRequests;
    if (id === 'r1' || id === 'r2') {
      console.log('Getting Mock Requests');
      observableRequests = this.requestService.getMockRequests();
    } else {
      observableRequests = this.requestService.getRequests();
    }
    return observableRequests.map((requests: MunchRequest[]) => {
      for (const request of requests) {
        if (request.pending === true && request.cron === true) {
          this.requests.push(this.request);
        }
      }
      return this.requests;
    });
  }

  runCron(): Observable<MunchRequest> {
    return this.requestService.runCron(this.request);
  }

  createSession(session: MunchSession): void {
    this.sessionService.createSession(session)
      .subscribe((newSession: MunchSession) => {
        this.router.navigate(['/munch/match/' + newSession._id])
          .then(() => {
            console.log('Navigating to session ' + newSession._id);
          }
        );
      }
    );
  }

  searchMatch(): void {
    const match = true; // TODO: make this a let, change based on algorithm results
    // do cosine similarity here
    if (match) {
      // create session
      console.log('matched');
    } else {
      // start cron
      console.log('starting cron');
      this.cron = this.runCron();
    }
  }

}
