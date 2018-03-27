import { Component, OnInit } from '@angular/core';
import {UserInterest} from '../_models/user-interest';
import {INTERESTSLIST, Preference} from '../_models/preference';

@Component({
  selector: 'app-music-affinity',
  templateUrl: './music-affinity.component.html',
  styleUrls: ['./music-affinity.component.css']
})
export class MusicAffinityComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
  export class User{
  _id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  points: number;
  friend_ids: string[];
  shoutout_ids: string[];
  avatarUrl: string;
  interests: UserInterest[];
  diet_id: string;
}


  export class Kanye {
  like?: string;
  }
  export class Noname {
  like?: string;
  }
  export class RobertGlasper {
  like?: string;
  }
  export class Jazz {
  like?: string;
  }
  export class Mozart {
  like?: string;
  }
  function submit() {
    console.log(Kanye);
    console.log(Noname);
    console.log(RobertGlasper);
    console.log(Jazz);
    console.log(Mozart);
  }
}
