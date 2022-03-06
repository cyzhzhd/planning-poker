import React, { FC } from 'react';
import { updatePokerCard } from '../states/poker/PokerActions';
import { usePokerDispatch } from '../states/poker/PokerHooks';
import PokerCard from './PokerCard';
import { CardListWrapper } from './PokerCardList.style';

interface PokerCardListProps {
  cards: number[];
  onClickHandler: (card: number) => void;
}
const PokerCardList: FC<PokerCardListProps> = ({ cards, onClickHandler }) => {
  return (
    <CardListWrapper>
      {cards.map((card) => (
        <li key={card} onClick={() => onClickHandler(card)}>
          <PokerCard point={card} />
        </li>
      ))}
    </CardListWrapper>
  );
};

export default PokerCardList;
