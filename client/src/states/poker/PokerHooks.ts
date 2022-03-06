import { useContext } from 'react';
import { PokerStateContext, PokerDispatchContext } from './PokerContext';

export const usePokerState = () => useContext(PokerStateContext);
export const usePokerDispatch = () => useContext(PokerDispatchContext);
