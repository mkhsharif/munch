import { Component, OnInit } from '@angular/core';
import { ShoutOut} from '../../../_models/shout-out';
import {ShoutOutService} from '../../../_services/shout-out.service';
import {UserService} from '../../../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shout-out-create',
  templateUrl: './shout-out-create.component.html',
  styleUrls: ['./shout-out-create.component.css']
})
export class ShoutOutCreateComponent implements OnInit {
  shoutout: ShoutOut = {
    user: '',
    message: '',
  };
  constructor(
    private shoutOutService: ShoutOutService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.shoutout.user = this.userService.getCurrentUser()._id;
  }

  createShoutOut(): void {
    this.shoutOutService.createShoutOut(this.shoutout)
      .subscribe(() => {
        console.log(this.shoutout.user + ' created a shoutout');
        this.router.navigate(['/dashboard']);
      });
  }
}
