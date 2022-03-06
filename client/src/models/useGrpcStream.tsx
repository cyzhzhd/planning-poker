import { StreamRequest, Card, UserResponse } from '../proto/poker_pb';
import { useEffect } from 'react';
import client from '../helpers/client';
import { useUserState } from '../states/user/UserHooks';
import { updatePokerUsers } from '../states/poker/PokerActions';
import { usePokerDispatch } from '../states/poker/PokerHooks';

const useGrpcStream = () => {
  const user = useUserState();

  const pokerDispatch = usePokerDispatch();
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
      console.log('userStream', msg.usersList);
      updatePokerUsers(pokerDispatch, msg.usersList);
    });

    const cardStream = client.cardStream(req, {});
    cardStream.on('data', (chunk: Card) => {
      const msg = chunk.toObject();
      console.log('card', msg);
    });
  }, [pokerDispatch, user]);
};

export default useGrpcStream;
