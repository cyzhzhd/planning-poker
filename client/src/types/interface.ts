import { User } from '../proto/poker_pb';

export interface PokerState {
  players: User.AsObject[];
  point: number;
  gameStatus: string;
  operator: string;
}
