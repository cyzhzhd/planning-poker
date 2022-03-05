import React, { FC } from 'react';
import usePokerRoom from '../models/usePokerRoom';

const PokerRoom: FC = () => {
  usePokerRoom();
  return <div>PokerRoom</div>;
};

export default PokerRoom;
