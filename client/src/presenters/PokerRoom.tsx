import React, { FC } from 'react';
import usePokerRoom from '../models/usePokerRoom';
import { usePokerState } from '../states/poker/PokerHooks';
import { useUserState } from '../states/user/UserHooks';

const PokerRoom: FC = () => {
  const user = useUserState();
  usePokerRoom();

  const pokerState = usePokerState();
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
    </div>
  );
};

export default PokerRoom;
