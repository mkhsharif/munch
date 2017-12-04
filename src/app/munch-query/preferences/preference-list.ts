import {DIET, GENDER, INTERESTS, LOCATION, Preference} from './preference';

export const CATEGORIES: Map<string, Preference> = new Map()
  .set('Gender', {name: 'Gender', options: GENDER, multi: false})
  .set('Diet', {name: 'Diet', options: DIET, multi: true})
  .set('Location', {name: 'Location', options: LOCATION, multi: true})
  .set('Interests', {name: 'Interests', options: INTERESTS, multi: true});

