import React, { FC } from 'react';
import PokerCardList from '../components/PokerCardList';
import useGrpcStream from '../models/useGrpcStream';
import usePokerRoom from '../models/usePokerRoom';
import { useUserState } from '../states/user/UserHooks';

const PokerRoom: FC = () => {
  const user = useUserState();
  useGrpcStream();
  const {
    values: { pokerState },
    operations: { selectPokerCard },
  } = usePokerRoom();

  return (
    <div>
      <h1>PokerRoom</h1>
      <div>
        hi {user.id}:{user.name}
      </div>
      <div>
        <div>userlist</div>
        {pokerState.users.map((user) => {
          return (
            <div key={user.id}>
              {user.name}: {user.score ?? 'not yet selected'}
            </div>
          );
        })}
      </div>
      <PokerCardList
        cards={[0, 1, 2, 3, 5, 8, 13]}
        onClickHandler={selectPokerCard}
      />
    </div>
  );
};

export default PokerRoom;
