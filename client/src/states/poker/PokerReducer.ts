import { User } from '../../proto/poker_pb';
import { PokerUser, State } from './type';

export enum ActionTypes {
  UPDATE_POKER_USERS = 'updatePokerUsers',
}

export interface PokerAction {
  type: ActionTypes.UPDATE_POKER_USERS;
  users?: User.AsObject[];
}

export const initialState: State = {
  users: [],
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
    default: {
      throw new Error('Unknown action');
    }
  }
};
