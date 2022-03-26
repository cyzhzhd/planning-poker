import { useContext } from 'react';
import { PokerState } from '../../types/interface';
import {
  PokerStateContext,
  PokerDispatchContext,
  PokerDispatch,
} from './PokerContext';

export const usePokerState = (): PokerState => useContext(PokerStateContext);
export const usePokerDispatch = (): PokerDispatch =>
  useContext(PokerDispatchContext);
