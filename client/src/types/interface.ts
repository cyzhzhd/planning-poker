import { User } from '../proto/poker_pb';

export interface PokerState {
  players: User.AsObject[];
  point: number;
  gameStatus: GameStatus;
  operator: string;
}

export enum GameStatus {
  play = 'play',
  ready = 'ready',
}
