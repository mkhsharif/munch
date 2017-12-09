import {User} from '../users/user';
import {Preference} from './preferences/preference';

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
