import { createContext, Dispatch } from 'react';
import { PokerAction, initialState } from './PokerReducer';
import { State } from './type';

export type PokerDispatch = Dispatch<PokerAction>;

export const PokerStateContext = createContext<State>(initialState);
export const PokerDispatchContext = createContext<PokerDispatch>(() => null);
