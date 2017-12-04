import {User} from '../users/user';

export class Query {
  _id?: string;
  user: string;
  friendsMap: Map<string, User>;
  status: string;
}
