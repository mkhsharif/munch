
export class MunchRequest {
  _id?: string;
  user_id: string;
  time: string;
  location_id: string;
  pending: boolean;
  cron: boolean;
  descriptionMessage: string;
  interest_ids: string[];
  diet_id: string;
}
