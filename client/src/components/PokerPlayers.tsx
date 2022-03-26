import React, { FC } from 'react';
import { User } from '../proto/poker_pb';
import PlayerCard from './PlayerCard';
import { Players, PlayerName, PlayersWrapper } from './PokerPlayers.style';

interface PokerPlayersProps {
  players: User.AsObject[];
  gameStatus: string;
}
const PokerPlayers: FC<PokerPlayersProps> = ({ players, gameStatus }) => {
  return (
    <PlayersWrapper>
      <Players>
        {players.map((player) => {
          return (
            <div key={player.id}>
              <PlayerCard point={player.point} isOpen={gameStatus === 'play'} />
              <PlayerName>{player.name}</PlayerName>
            </div>
          );
        })}
      </Players>
    </PlayersWrapper>
  );
};

export default PokerPlayers;
