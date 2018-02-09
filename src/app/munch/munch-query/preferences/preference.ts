export const GENDERLIST: string[] = [
  'Any',
  'Male',
  'Female'
];

export const DIETLIST: string[] = [
  'Halal',
  'Vegetarian',
  'Vegan',
  'Pescatarian'
];

export const LOCATIONLIST: string[] = [
  'Annex',
  'Punchout',
  'Starbucks',
  'Potbelly',
  'Sankofa'
];

export const INTERESTSLIST: string[] = [
  'Gaming',
  'Football',
  'Kanye West',
  'Beyonce',
  'Networking',
  'Extra Curriculars',
  'New Friends',
  'Anime',
  'Smash Bros'
];

export class Preference {
  _id?: string;
  name: string;
  options: string[];
}
