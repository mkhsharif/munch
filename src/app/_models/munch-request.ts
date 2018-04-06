import {Genders} from './genders';
import {Diets} from './diets';

export class MunchRequest {
  _id?: string;
  user_id: string;
  time: Date;
  location_id: string;
  pending: boolean;
  cron: boolean;
  descriptionMessage: string;
  interest_ids: string[];
  diet_preference: Diets;
  gender_preference: Genders;
  user_gender: Genders.FEMALE | Genders.MALE;
  user_diet: Diets;
}
