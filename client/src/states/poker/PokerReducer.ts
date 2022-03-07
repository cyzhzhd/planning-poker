import { Card, User } from '../../proto/poker_pb';
import { PokerState } from '../../types/interface';

export enum ActionTypes {
  UPDATE_POKER_USERS = 'updatePokerUsers',
  UPDATE_POKER_CARD = 'updatePokerCard',
}

export interface PokerAction {
  type: ActionTypes.UPDATE_POKER_USERS | ActionTypes.UPDATE_POKER_CARD;
  users?: User.AsObject[];
  card?: number;
  user?: Card.AsObject;
}

export const initialState: PokerState = {
  users: [],
  point: null,
};

export const reducer = (state = initialState, action: PokerAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_POKER_USERS: {
      return {
        ...state,
        users: action.users as User.AsObject[],
      };
    }
    case ActionTypes.UPDATE_POKER_CARD: {
      return {
        ...state,
        card: action.card as number,
      };
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};
