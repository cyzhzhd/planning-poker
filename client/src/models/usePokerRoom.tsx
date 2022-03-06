import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserState } from '../states/user/UserHooks';
import { updatePokerCard } from '../states/poker/PokerActions';
import { usePokerDispatch, usePokerState } from '../states/poker/PokerHooks';
import { PokerState } from '../types/interface';

interface usePokerRoomReturnType {
  values: {
    pokerState: PokerState;
  };
  operations: {
    selectPokerCard: (card: number) => void;
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
  const selectPokerCard = (card: number) => {
    updatePokerCard(pokerDispatch, card);
  };

  return {
    values: {
      pokerState,
    },
    operations: {
      selectPokerCard,
    },
  };
};

export default usePokerRoom;
