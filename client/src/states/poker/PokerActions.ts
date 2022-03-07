import { User } from '../../proto/poker_pb';
import { PokerDispatch } from './PokerContext';
import { ActionTypes } from './PokerReducer';

export const updatePokerPlayers = (
  dispatch: PokerDispatch,
  players: User.AsObject[],
): void => {
  dispatch({ players, type: ActionTypes.UPDATE_POKER_PLAYERS });
};
export const updatePokerCard = (
  dispatch: PokerDispatch,
  point: number,
): void => {
  dispatch({ point, type: ActionTypes.UPDATE_POKER_CARD });
};
export const updateGameStatus = (
  dispatch: PokerDispatch,
  { operator, status }: { operator: string; status: string },
): void => {
  dispatch({
    operator,
    gameStatus: status,
    type: ActionTypes.UPDATE_GAME_STATUS,
  });
};
export const resetPlayerCards = (dispatch: PokerDispatch): void => {
  dispatch({ type: ActionTypes.RESET_PLAYER_CARDS });
};
