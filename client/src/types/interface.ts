import { User } from '../proto/poker_pb';

export interface PokerState {
  users: User.AsObject[];
  point: number | null;
}
