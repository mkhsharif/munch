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
  interests: UserInterest[];
  diet_id: string;

  getInterestIds(): string[] {
    const interest_ids: string[] = [];
    for (const userInterest of this.interests) {
      interest_ids.push(userInterest.interest_id);
    } return interest_ids;
  }
}
