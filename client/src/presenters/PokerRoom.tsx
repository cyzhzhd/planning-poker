import React, { FC } from 'react';
import usePokerRoom from '../models/usePokerRoom';
import { useUserState } from '../states/user/UserHooks';

const PokerRoom: FC = () => {
  const user = useUserState();
  usePokerRoom();
  return (
    <div>
      <h1>PokerRoom</h1>
      <div>
        hi {user.id}:{user.name}
      </div>
    </div>
  );
};

export default PokerRoom;
