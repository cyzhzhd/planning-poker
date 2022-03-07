import React, { FC } from 'react';
import { User } from '../proto/poker_pb';
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
        {pokerState.point >= 0 ? (
          <>
            {pokerState.gameStatus === 'play' ? (
              <button onClick={restart}>새게임</button>
            ) : (
              <button onClick={play}>시작</button>
            )}
          </>
        ) : (
          <div>카드를 고르세요</div>
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
