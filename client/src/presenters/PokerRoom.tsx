import React, { FC, useMemo } from 'react';
import GameStatsTable from '../components/GameStatsTable';
import PokerCardList from '../components/PokerCardList';
import PokerTable from '../components/PokerTable';
import useGrpcStream from '../models/useGrpcStream';
import usePokerRoom from '../models/usePokerRoom';
import { GameStatus } from '../types/interface';
import { Body, Bottom, Main, RoomName, Wrapper } from './PokerRoom.style';

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
    <Wrapper>
      <RoomName>PokerRoom</RoomName>
      <Body>
        <Main>
          <PokerTable
            pokerState={pokerState}
            play={playPoker}
            restart={restartPoker}
          />
        </Main>
        <Bottom>
          {pokerState.gameStatus == GameStatus.play ? (
            <GameStatsTable cards={cards.filter((v) => v >= 0)} />
          ) : (
            <PokerCardList
              points={[0, 1, 2, 3, 5, 8, 13]}
              onClickHandler={selectPokerCard}
            />
          )}
        </Bottom>
      </Body>
    </Wrapper>
  );
};

export default PokerRoom;
