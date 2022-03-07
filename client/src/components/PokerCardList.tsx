import React, { FC } from 'react';
import PokerCard from './PokerCard';
import { CardListWrapper } from './PokerCardList.style';

interface PokerCardListProps {
  points: number[];
  onClickHandler: (card: number) => void;
}
const PokerCardList: FC<PokerCardListProps> = ({ points, onClickHandler }) => {
  return (
    <CardListWrapper>
      {points.map((point) => (
        <li key={point} onClick={() => onClickHandler(point)}>
          <PokerCard point={point} />
        </li>
      ))}
    </CardListWrapper>
  );
};

export default PokerCardList;
