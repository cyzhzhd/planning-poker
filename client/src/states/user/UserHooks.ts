import { useContext } from 'react';
import { UserStateContext, UserDispatchContext } from './UserContext';

export const useUserState = () => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
