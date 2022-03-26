/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DEFAULT_POINT } from '../../constant/constant';
import { Card, User } from '../../proto/poker_pb';
import { PokerState } from '../../types/interface';

export enum ActionTypes {
  UPDATE_POKER_PLAYERS = 'updatePokerPlayers',
  UPDATE_POKER_CARD = 'updatePokerCard',
  UPDATE_GAME_STATUS = 'updateGameStatus',
  RESET_PLAYER_CARDS = 'resetPlayerCards',
}

export interface PokerAction {
  type:
    | ActionTypes.UPDATE_POKER_PLAYERS
    | ActionTypes.UPDATE_POKER_CARD
    | ActionTypes.UPDATE_GAME_STATUS
    | ActionTypes.RESET_PLAYER_CARDS;
  players?: User.AsObject[];
  point?: number;
  user?: Card.AsObject;
  gameStatus?: string;
  operator?: string;
}

export const initialState: PokerState = {
  players: [],
  point: -1,
  gameStatus: 'ready',
  operator: '',
};

export const reducer = (state = initialState, action: PokerAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_POKER_PLAYERS: {
      return {
        ...state,
        players: action.players as User.AsObject[],
      };
    }
    case ActionTypes.UPDATE_POKER_CARD: {
      return {
        ...state,
        point: action.point as number,
      };
    }
    case ActionTypes.UPDATE_GAME_STATUS: {
      return {
        ...state,
        gameStatus: action.gameStatus ?? 'ready',
        operator: action.operator ?? '',
      };
    }
    case ActionTypes.RESET_PLAYER_CARDS: {
      const players = state.players.map((p) => ({
        ...p,
        point: DEFAULT_POINT,
      }));
      return {
        ...state,
        players,
      };
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};
