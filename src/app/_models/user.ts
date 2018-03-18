import {UserInterest} from './user-interest';

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
  avatarUrl: string;
  interests: UserInterest[];
  diet: string;
}
