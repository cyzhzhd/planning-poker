import { CardRequest, CardResponse } from '../proto/poker_pb';
import { PokerServiceClient } from '../proto/PokerServiceClientPb';
import { useEffect } from 'react';

const client = new PokerServiceClient('http://localhost:8080');
const usePokerRoom = () => {
  useEffect(() => {
    const req = new CardRequest();
    req.setUsername('ek');
    req.setUid('132');
    req.setScore(3);

    const cardStream = client.cardStream(req, {});
    cardStream.on('data', (chunk: CardResponse) => {
      const msg = chunk.toObject();
      console.log(msg);
    });
  }, []);
};

export default usePokerRoom;
