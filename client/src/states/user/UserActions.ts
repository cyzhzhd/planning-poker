import { User } from '../../proto/poker_pb';
import { UserDispatch } from './UserContext';
import { ActionTypes } from './UserReducer';

export const updateUser = (
  dispatch: UserDispatch,
  user: User.AsObject,
): void => {
  dispatch({ user, type: ActionTypes.UPDATE_USER });
};
