import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ShoutOutService} from '../../../_services/shout-out.service';
import {ShoutOut} from '../../../_models/shout-out';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../_models/user';
import {UserService} from '../../../_services/user.service';

@Component({
  selector: 'app-shout-out-detail',
  templateUrl: './shout-out-detail.component.html',
  styleUrls: ['./shout-out-detail.component.css']
})

export class ShoutOutDetailComponent implements OnInit {
  shoutout: ShoutOut;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private shoutoutService: ShoutOutService,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getShoutOut().subscribe(
      shoutout => {
        this.userService.getUser(shoutout.user)
          .subscribe(user => {
            console.log(user);
            this.user = user;
          });
      }
    );
  }

  getShoutOut(): Observable<ShoutOut> {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('getshoutout');
    return this.shoutoutService.getShoutOut(id)
      .map((shoutout: ShoutOut) => {
        this.shoutout = shoutout;
        console.log(shoutout);
        return this.shoutout;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
