import React, { FC } from 'react';
import {
  Gauge,
  Votes,
  VoteWrapper,
  VoteValue,
  Stats,
  StatKey,
  StatValue,
  StatsTable,
} from './GameStatsTable.style';
import PlayerCard from './PlayerCard';

interface GameStatsTableProps {
  display: boolean;
  cards: number[];
}
interface pointMap {
  [key: string]: number;
}
const GameStatsTable: FC<GameStatsTableProps> = ({ display, cards }) => {
  if (display === false) return <></>;
  const pointsMap = cards.reduce((acc: pointMap, val: number) => {
    acc[val] ? acc[val]++ : (acc[val] = 1);
    return acc;
  }, {} as pointMap);

  const sum = cards.reduce((acc, val) => (acc += val), 0);
  const average = sum / Math.max(cards.length, 1);

  return (
    <StatsTable>
      <Votes>
        {Object.entries(pointsMap).map(([point, count]) => (
          <VoteWrapper key={point}>
            <Gauge percent={(count / cards.length) * 100} />
            <PlayerCard point={Number(point)} isOpen={true} />
            <VoteValue>{count}표</VoteValue>
          </VoteWrapper>
        ))}
      </Votes>
      <Stats>
        <StatKey>Average:</StatKey>
        <StatValue>{average}</StatValue>
      </Stats>
    </StatsTable>
  );
};

export default GameStatsTable;
