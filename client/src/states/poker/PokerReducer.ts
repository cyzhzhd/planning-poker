import { User } from '../../proto/poker_pb';
import { PokerUser, PokerState } from '../../types/interface';

export enum ActionTypes {
  UPDATE_POKER_USERS = 'updatePokerUsers',
  UPDATE_POKER_CARD = 'updatePokerCard',
}

export interface PokerAction {
  type: ActionTypes.UPDATE_POKER_USERS | ActionTypes.UPDATE_POKER_CARD;
  users?: User.AsObject[];
  card?: number;
}

export const initialState: PokerState = {
  users: [],
  card: null,
};

export const reducer = (state = initialState, action: PokerAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_POKER_USERS: {
      const users = action.users?.map((u) => ({
        id: u.id,
        name: u.name,
        score: state.users.find((su) => su.id === u.id)?.score,
      })) as PokerUser[];
      return {
        ...state,
        users,
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
