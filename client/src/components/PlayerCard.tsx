import React, { FC } from 'react';
import { CardWrapper } from './PlayerCard.style';

interface PlayerCardProps {
  point: number;
  isOpen: boolean;
}
const PlayerCard: FC<PlayerCardProps> = ({ point, isOpen }) => {
  return (
    <CardWrapper isOpen={isOpen || point < 0}>
      {point >= 0 ? point : ''}
    </CardWrapper>
  );
};

export default PlayerCard;
