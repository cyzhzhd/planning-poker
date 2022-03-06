import { createContext, Dispatch } from 'react';
import { User } from '../../proto/poker_pb';
import { UserAction, initialState } from './UserReducer';

export type UserDispatch = Dispatch<UserAction>;

export const UserStateContext = createContext<User.AsObject>(initialState);
export const UserDispatchContext = createContext<UserDispatch>(() => null);
