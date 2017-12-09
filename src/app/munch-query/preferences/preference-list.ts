import {DIETLIST, GENDERLIST, INTERESTSLIST, LOCATIONLIST, Preference} from './preference';

export const DIETPREFERENCE: Preference = {
  name: 'Gender',
  options: GENDERLIST,
  choices: new Set<string>(),
  multi: false
};

export const GENDERPREFERENCE: Preference = {
  name: 'Diet',
  options: DIETLIST,
  choices: new Set<string>(),
  multi: true
};

export const LOCATIONPREFERENCE: Preference = {
  name: 'Location',
  options: LOCATIONLIST,
  choices: new Set<string>(),
  multi: true
};

export const INTERESTSPREFERENCE: Preference = {
  name: 'Interests',
  options: INTERESTSLIST,
  choices: new Set<string>(),
  multi: true,
};
