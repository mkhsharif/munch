// TODO: Remove this class
import {DIETLIST, GENDERLIST, INTERESTSLIST, LOCATIONLIST, Preference} from './preference';

export const GENDERPREFERENCE: Preference = {
  name: 'Gender',
  options: GENDERLIST
};

export const DIETPREFERENCE: Preference = {
  name: 'Diet',
  options: DIETLIST
};

export const LOCATIONPREFERENCE: Preference = {
  name: 'Location',
  options: LOCATIONLIST
};

export const INTERESTSPREFERENCE: Preference = {
  name: 'Interests',
  options: INTERESTSLIST
};
