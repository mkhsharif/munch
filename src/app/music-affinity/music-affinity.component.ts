import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {UserInterest} from '../_models/user-interest';
import {User} from '../_models/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../_services/user.service';
import {Interest} from '../_models/interest';
import {INTERESTS} from '../_models/interest-list';


@Component({
  selector: 'app-music-affinity',
  templateUrl: './music-affinity.component.html',
  styleUrls: ['./music-affinity.component.css']
})
export class MusicAffinityComponent implements OnInit, AfterViewInit {
  user: User;
  interests: Interest[] = INTERESTS;
  @ViewChild('i1') i1: ElementRef;

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.getUser().subscribe();
    console.log(this.interests);
  }
  getUser(): Observable<User> {
    return this.userService.getUser('u1')
      .map((user: User) => {
        this.user = user;
        return this.user;
    });
  }
  ngAfterViewInit() {
    submit() {
      console.log('i1 value: ');
      console.log(this.i1.nativeElement);
    }

  }
}


