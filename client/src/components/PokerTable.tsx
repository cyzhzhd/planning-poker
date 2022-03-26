import React, { FC } from 'react';
import { PokerState } from '../types/interface';
import PokerPlayers from './PokerPlayers';
import { Table } from './PokerTable.style';

interface PokerTableProps {
  pokerState: PokerState;
  play: () => void;
  restart: () => void;
}
const PokerTable: FC<PokerTableProps> = ({ pokerState, play, restart }) => {
  return (
    <div>
      <Table>
        {pokerState.gameStatus === 'play' ? (
          <button onClick={restart}>새게임</button>
        ) : (
          <>
            {pokerState.point >= 0 ? (
              <button onClick={play}>시작</button>
            ) : (
              <div>카드를 고르세요</div>
            )}
          </>
        )}
      </Table>
      <PokerPlayers
        players={pokerState.players}
        gameStatus={pokerState.gameStatus}
      />
    </div>
  );
};

export default PokerTable;
