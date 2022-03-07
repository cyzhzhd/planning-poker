import React, { FC } from 'react';
import { usePokerState } from '../states/poker/PokerHooks';
import { CardWrapper } from './PokerCard.style';

interface PokerCardProps {
  point: number;
}
const PokerCard: FC<PokerCardProps> = ({ point }) => {
  const pokerState = usePokerState();
  return (
    <CardWrapper selected={pokerState.point === point && pokerState.point >= 0}>
      {point >= 0 ? point : ''}
    </CardWrapper>
  );
};

export default PokerCard;
