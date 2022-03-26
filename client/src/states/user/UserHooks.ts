import { useContext } from 'react';
import { User } from '../../proto/poker_pb';
import {
  UserStateContext,
  UserDispatchContext,
  UserDispatch,
} from './UserContext';

export const useUserState = (): User.AsObject => useContext(UserStateContext);
export const useUserDispatch = (): UserDispatch =>
  useContext(UserDispatchContext);
