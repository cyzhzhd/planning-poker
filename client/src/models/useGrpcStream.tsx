import { GameStatus, StreamRequest, UserResponse } from '../proto/poker_pb';
import { useEffect } from 'react';
import client from '../helpers/client';
import { useUserState } from '../states/user/UserHooks';
import {
  resetPlayerCards,
  updateGameStatus,
  updatePokerCard,
  updatePokerPlayers,
} from '../states/poker/PokerActions';
import { usePokerDispatch } from '../states/poker/PokerHooks';
import { GameStatus as PokerGameStatus } from '../types/interface';

const useGrpcStream = (): void => {
  const user = useUserState();

  const pokerDispatch = usePokerDispatch();
  useEffect(() => {
    if (user.id === '') {
      return;
    }
    console.log('useEffect');

    const req = new StreamRequest();
    req.setUid(user.id);

    const userStream = client.userStream(req, {});
    userStream.on('data', (chunk: UserResponse) => {
      const msg = chunk.toObject();
      console.log('userStream', msg.usersList);
      updatePokerPlayers(pokerDispatch, msg.usersList);
    });

    const gameStream = client.gameStream(req, {});
    gameStream.on('data', (chunk: GameStatus) => {
      const msg = chunk.toObject();
      console.log('gameStream', msg);
      updateGameStatus(pokerDispatch, {
        operator: msg.operatorid,
        status: msg.status as PokerGameStatus,
      });

      if (msg.status === 'ready') {
        resetPlayerCards(pokerDispatch);
        updatePokerCard(pokerDispatch, -1);
      }
    });
  }, [pokerDispatch, user]);
};

export default useGrpcStream;
