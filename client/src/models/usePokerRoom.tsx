import { StreamRequest, Card, UserResponse, User } from '../proto/poker_pb';
import { useEffect, useState } from 'react';
import client from '../helpers/client';
import { useUserState } from '../states/user/UserHooks';
import { useNavigate } from 'react-router-dom';

const usePokerRoom = () => {
  const [users, setUsers] = useState<User.AsObject[]>([]);
  const user = useUserState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.id === '') {
      navigate('/login');
    }
  }, [navigate, user]);

  useEffect(() => {
    if (user.id === '') {
      return;
    }
    console.log('useEffect');

    const req = new StreamRequest();
    req.setUid(user.id);

    const userStream = client.userStream(req, {});
    userStream.on('data', (chunk: UserResponse) => {
      const msg = chunk.toObject();
      console.log('user', msg.usersList);
      setUsers(msg.usersList);
    });

    const cardStream = client.cardStream(req, {});
    cardStream.on('data', (chunk: Card) => {
      const msg = chunk.toObject();
      console.log('card', msg);
    });
  }, [user]);

  return users;
};

export default usePokerRoom;
