import React, { FC, useMemo } from 'react';
import GameStatsTable from '../components/GameStatsTable';
import PokerCardList from '../components/PokerCardList';
import PokerTable from '../components/PokerTable';
import useGrpcStream from '../models/useGrpcStream';
import usePokerRoom from '../models/usePokerRoom';
import { GameStatus } from '../types/interface';

const PokerRoom: FC = () => {
  useGrpcStream();
  const {
    values: { pokerState },
    operations: { selectPokerCard, playPoker, restartPoker },
  } = usePokerRoom();
  const cards = useMemo(
    () => pokerState.players.map((p) => p.point),
    [pokerState],
  );

  return (
    <div>
      <h1>PokerRoom</h1>
      <div>
        <PokerTable
          pokerState={pokerState}
          play={playPoker}
          restart={restartPoker}
        />
      </div>
      <GameStatsTable
        display={pokerState.gameStatus == GameStatus.play}
        cards={cards.filter((v) => v >= 0)}
      />
      <PokerCardList
        points={[0, 1, 2, 3, 5, 8, 13]}
        onClickHandler={selectPokerCard}
      />
    </div>
  );
};

export default PokerRoom;
