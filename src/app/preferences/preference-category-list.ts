import {DIET, GENDER, INTERESTS, LOCATION, PreferenceCategory} from './preference-category';

export const CATEGORIES: Map<string, PreferenceCategory> = new Map()
  .set('Gender', {name: 'Gender', choices: GENDER})
  .set('Diet', {name: 'Diet', choices: DIET})
  .set('Location', {name: 'Location', choices: LOCATION})
  .set('Interests', {name: 'Interests', choices: INTERESTS});

