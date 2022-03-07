import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserState } from '../states/user/UserHooks';
import { updatePokerCard } from '../states/poker/PokerActions';
import { usePokerDispatch, usePokerState } from '../states/poker/PokerHooks';
import { PokerState } from '../types/interface';
import client from '../helpers/client';
import { Card, GameStatus } from '../proto/poker_pb';

interface usePokerRoomReturnType {
  values: {
    pokerState: PokerState;
  };
  operations: {
    selectPokerCard: (card: number) => void;
    playPoker: () => void;
    restartPoker: () => void;
  };
}
const usePokerRoom = (): usePokerRoomReturnType => {
  const user = useUserState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.id === '') {
      navigate('/login');
    }
  }, [navigate, user]);

  const pokerState = usePokerState();
  const pokerDispatch = usePokerDispatch();
  const sendCard = (point: number) => {
    const req = new Card();
    req.setUid(user.id);
    req.setPoint(point);
    req.setUsername(user.name);

    client.sendCard(req, {});
  };
  const selectPokerCard = (card: number) => {
    if (pokerState.gameStatus === 'play') return;
    if (pokerState.point === card) {
      card = -1;
    }

    updatePokerCard(pokerDispatch, card);
    sendCard(card);
  };

  const playPoker = () => {
    const req = new GameStatus();
    req.setOperatorid(user.id);
    req.setStatus('play');

    client.operateGame(req, {});
  };
  const restartPoker = () => {
    const req = new GameStatus();
    req.setOperatorid(user.id);
    req.setStatus('ready');

    client.operateGame(req, {});
  };

  return {
    values: {
      pokerState,
    },
    operations: {
      selectPokerCard,
      playPoker,
      restartPoker,
    },
  };
};

export default usePokerRoom;
