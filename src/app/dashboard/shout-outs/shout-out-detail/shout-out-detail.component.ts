import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ShoutOutService} from '../shout-out.service';
import {ShoutOut} from '../shout-out';

@Component({
  selector: 'app-shout-out-detail',
  templateUrl: './shout-out-detail.component.html',
  styleUrls: ['./shout-out-detail.component.css']
})
export class ShoutOutDetailComponent implements OnInit {
  shoutout: ShoutOut;
  constructor(
    private route: ActivatedRoute,
    private shoutoutService: ShoutOutService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getShoutOut();
  }

  getShoutOut(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.shoutoutService.getShoutOut(id)
      .subscribe(shoutout => this.shoutout = shoutout);
  }

  goBack(): void {
    this.location.back();
  }
}
