import React, { FC, useEffect } from 'react';
import { CardRequest, CardResponse } from './proto/poker_pb';
import { PokerServiceClient } from './proto/PokerServiceClientPb';

const client = new PokerServiceClient('http://localhost:8080');
const App: FC = () => {
  useEffect(() => {
    const req = new CardRequest();
    req.setUsername('ek');
    req.setUid('132');
    req.setScore(3);

    const cardStream = client.card(req, {});
    cardStream.on('data', (chunk: CardResponse) => {
      const msg = chunk.toObject();
      console.log(msg);
    });
  }, []);
  return <div className="App">hello world</div>;
};

export default App;
