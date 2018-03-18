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
  friend_ids: string[];
  shoutout_ids: string[];
  avatarUrl: string;
  interest_ids: UserInterest[];
  diet_id: string;
}
