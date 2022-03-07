import React, { FC } from 'react';
import PokerCardList from '../components/PokerCardList';
import PokerTable from '../components/PokerTable';
import useGrpcStream from '../models/useGrpcStream';
import usePokerRoom from '../models/usePokerRoom';
import { useUserState } from '../states/user/UserHooks';

const PokerRoom: FC = () => {
  const user = useUserState();
  useGrpcStream();
  const {
    values: { pokerState },
    operations: { selectPokerCard, playPoker, restartPoker },
  } = usePokerRoom();

  return (
    <div>
      <h1>PokerRoom</h1>
      <div>
        hi {user.id}:{user.name}
      </div>
      <div>
        <PokerTable
          pokerState={pokerState}
          play={playPoker}
          restart={restartPoker}
        />
      </div>
      <PokerCardList
        points={[0, 1, 2, 3, 5, 8, 13]}
        onClickHandler={selectPokerCard}
      />
    </div>
  );
};

export default PokerRoom;
