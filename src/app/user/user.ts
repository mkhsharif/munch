import {MunchSession} from '../munch/munch-session/munch-session';

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
  current_session?: MunchSession;
}
