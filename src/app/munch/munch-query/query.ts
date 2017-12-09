import {Preference} from './preferences/preference';
import {User} from '../../user/user';

export class Query {
  _id?: string;
  user: string;
  friendsMap: Map<string, User>;
  status: string;
  locationPreference: Preference;
  dietPreference: Preference;
  interestsPreference: Preference;
  genderPreference: Preference;
}
