import React, { FC } from 'react';
import { User } from '../proto/poker_pb';
import PlayerCard from './PlayerCard';
import { Players, PlayerName } from './PokerPlayers.style';

interface PokerPlayersProps {
  players: User.AsObject[];
  gameStatus: string;
}
const PokerPlayers: FC<PokerPlayersProps> = ({ players, gameStatus }) => {
  console.log('players', players);
  return (
    <div>
      <div>userlist</div>
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
    </div>
  );
};

export default PokerPlayers;
