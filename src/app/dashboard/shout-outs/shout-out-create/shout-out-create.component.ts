import { Component, OnInit } from '@angular/core';
import { ShoutOut} from '../../../models/shout-out';

@Component({
  selector: 'app-shout-out-create',
  templateUrl: './shout-out-create.component.html',
  styleUrls: ['./shout-out-create.component.css']
})
export class ShoutOutCreateComponent implements OnInit {
  shoutout: ShoutOut = {
    user: '',
    message: '',
    _id: '5'
  };
  constructor() { }

  ngOnInit() {
  }

  createShoutOut(): void {
    alert(this.shoutout.user + ' created a shoutout');
    console.log(this.shoutout.user + ' created a shoutout');
}
}
