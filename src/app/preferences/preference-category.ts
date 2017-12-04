export const GENDER: string[] = [
  'Any',
  'Male',
  'Female'
];

export const DIET: string[] = [
  'Any',
  'Halal',
  'Vegetarian',
  'Vegan',
  'Pescatarian'
];

export const LOCATION: string[] = [
  'Annex',
  'Punchout',
  'Starbucks',
  'Potbelly',
  'Sankofa'
];

export const INTERESTS: string[] = [
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

export class PreferenceCategory {
  _id?: string;
  name: string;
  choices: string[];
}
