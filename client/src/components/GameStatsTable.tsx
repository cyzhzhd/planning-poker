import React, { FC } from 'react';

interface GameStatsTableProps {
  display: boolean;
}
const GameStatsTable: FC<GameStatsTableProps> = ({ display }) => {
  return <div>{display && 'GameStatsTable'}</div>;
};

export default GameStatsTable;
