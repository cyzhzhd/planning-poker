import { User } from '../../proto/poker_pb';
import { PokerDispatch } from './PokerContext';
import { ActionTypes } from './PokerReducer';

export const updatePokerUsers = (
  dispatch: PokerDispatch,
  users: User.AsObject[],
): void => {
  dispatch({ users, type: ActionTypes.UPDATE_POKER_USERS });
};
