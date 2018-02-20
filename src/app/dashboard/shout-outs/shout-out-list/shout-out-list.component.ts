import { Component, OnInit } from '@angular/core';
import { ShoutOutService } from '../../../_services/shout-out.service';
import { ShoutOut } from '../../../_models/shout-out';
import {User} from '../../../_models/user';
import {UserService} from '../../../_services/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shout-out-list',
  templateUrl: './shout-out-list.component.html',
  styleUrls: ['./shout-out-list.component.css']
})
export class ShoutOutListComponent implements OnInit {
  shoutouts: ShoutOut[];
  constructor(
    private shoutoutService: ShoutOutService) { }

  ngOnInit() {
    this.getShoutOuts();
  }

  getShoutOuts(): void {
    this.shoutoutService.getShoutOuts()
      .subscribe(shoutouts => this.shoutouts = shoutouts);
  }
}
