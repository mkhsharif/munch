import {User} from '../users/user';

interface UserNameToFriendMap {
  [userName: string]: User;
}

export class Query {
  _id?: string;
  user: string;
  friendsMap: UserNameToFriendMap;
  status: string;
}
