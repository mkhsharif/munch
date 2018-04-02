import {UserInterest} from './user-interest';
import {Genders} from './genders';

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
  interests: UserInterest[];
  diet_id: string;
  gender: Genders.MALE | Genders.FEMALE;
}
