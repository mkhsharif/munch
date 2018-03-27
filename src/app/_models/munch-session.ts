export class MunchSession {
  _id?: string;
  host_id: string;
  user_ids: string[];
  location_id: string;
  pending: boolean;
  active: boolean;
  pin: string;
  common_interest_ids: string[];
  time_completed: Date;
}
