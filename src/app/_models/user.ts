import {MunchSession} from './munch-session';
import {Query} from './query';

export class User {
  _id?: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  points: number;
  friends: string[];
  shoutouts: string[];
  munchSession?: MunchSession;
  query?: Query;
}
