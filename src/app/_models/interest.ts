import {UserInterest} from './user-interest';

export class Interest {
  _id?: string;
  name: string;

  toUserInterest(weight: number): UserInterest {
    return {interest_id: this._id, weight: weight};
  }
}
