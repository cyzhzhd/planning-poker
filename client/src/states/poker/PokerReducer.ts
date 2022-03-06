import { Card, User } from '../../proto/poker_pb';
import { PokerState } from '../../types/interface';

export enum ActionTypes {
  UPDATE_POKER_USERS = 'updatePokerUsers',
  UPDATE_POKER_CARD = 'updatePokerCard',
  UPDATE_USER_CARD = 'updateUserCard',
}

export interface PokerAction {
  type:
    | ActionTypes.UPDATE_POKER_USERS
    | ActionTypes.UPDATE_POKER_CARD
    | ActionTypes.UPDATE_USER_CARD;
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
      const users = action.users?.map((u) => ({
        id: u.id,
        name: u.name,
        point: state.users.find((su) => su.id === u.id)?.point,
      })) as User.AsObject[];
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
    case ActionTypes.UPDATE_USER_CARD: {
      console.log(action);
      const users = state.users.map((u) => ({
        id: u.id,
        name: u.name,
        point: action.user?.uid === u.id ? action.user.point : u.point,
      }));
      return {
        ...state,
        users,
      };
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};
