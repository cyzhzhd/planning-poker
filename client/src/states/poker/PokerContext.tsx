import { createContext, Dispatch } from 'react';
import { PokerAction, initialState } from './PokerReducer';
import { PokerState } from '../../types/interface';

export type PokerDispatch = Dispatch<PokerAction>;

export const PokerStateContext = createContext<PokerState>(initialState);
export const PokerDispatchContext = createContext<PokerDispatch>(() => null);
