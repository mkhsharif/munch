import { Injectable } from '@angular/core';
import { Query } from './query';
import {DIETPREFERENCE, GENDERPREFERENCE, INTERESTSPREFERENCE, LOCATIONPREFERENCE} from './preferences/preference-list';
import {User} from '../../user/user';

@Injectable()
export class QueryServiceService {

  constructor() { }

  getQueries() {
    const qs: Query[] = [];
    const a: Query = {
      user: '',
      status: '',
      locationPreference: 'Annex',
      dietPreference: 'Vegan',
      genderPreference: 'Female',
      interestsPreference: 'Music'
    };
    qs.push(a);
    return qs;

  }

}
