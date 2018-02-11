import { Component, OnInit } from '@angular/core';
import { ShoutOutService } from '../../../services/shout-out.service';
import { ShoutOut } from '../../../models/shout-out';

@Component({
  selector: 'app-shout-out-list',
  templateUrl: './shout-out-list.component.html',
  styleUrls: ['./shout-out-list.component.css']
})
export class ShoutOutListComponent implements OnInit {
  shoutouts: ShoutOut[];
  constructor(private shoutoutService: ShoutOutService) { }

  ngOnInit() {
    this.getShoutOuts();
  }

  getShoutOuts(): void {
    this.shoutoutService.getShoutOuts()
      .subscribe(shoutouts => this.shoutouts = shoutouts);
  }

}
