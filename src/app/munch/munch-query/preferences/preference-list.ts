import {DIETLIST, GENDERLIST, INTERESTSLIST, LOCATIONLIST, Preference} from './preference';

export const DIETPREFERENCE: Preference = {
  name: 'Gender',
  options: GENDERLIST,
  choices: [],
  multi: false
};

export const GENDERPREFERENCE: Preference = {
  name: 'Diet',
  options: DIETLIST,
  choices: [],
  multi: true
};

export const LOCATIONPREFERENCE: Preference = {
  name: 'Location',
  options: LOCATIONLIST,
  choices: [],
  multi: true
};

export const INTERESTSPREFERENCE: Preference = {
  name: 'Interests',
  options: INTERESTSLIST,
  choices: [],
  multi: true,
};
