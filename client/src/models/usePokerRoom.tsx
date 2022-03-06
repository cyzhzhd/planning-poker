import { StreamRequest, Card } from '../proto/poker_pb';
import { useEffect } from 'react';
import client from '../helpers/client';
import { useUserState } from '../states/user/UserHooks';
import { useNavigate } from 'react-router-dom';

const usePokerRoom = () => {
  const user = useUserState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.id === '') {
      navigate('/login');
    }
  }, [navigate, user]);

  useEffect(() => {
    const req = new StreamRequest();
    req.setUid('132');

    const cardStream = client.cardStream(req, {});
    cardStream.on('data', (chunk: Card) => {
      const msg = chunk.toObject();
      console.log(msg);
    });
  }, []);
};

export default usePokerRoom;
