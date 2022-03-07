import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_POINT } from '../constant/constant';
import client from '../helpers/client';
import useInput from '../hooks/useInput';
import { InitiateRequest } from '../proto/poker_pb';
import { updateGameStatus } from '../states/poker/PokerActions';
import { usePokerDispatch } from '../states/poker/PokerHooks';
import { updateUser } from '../states/user/UserActions';
import { useUserDispatch } from '../states/user/UserHooks';

const Login: FC = () => {
  const [name, input, setName] = useInput({ type: 'text' });
  const userDispatch = useUserDispatch();
  const pokerDispatch = usePokerDispatch();
  const navigate = useNavigate();

  const onClickHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const req = new InitiateRequest();
    req.setName(name);
    client.joinGame(req, {}, (err, response) => {
      if (err) {
        console.error(err);
        setName('');
        return;
      }

      updateUser(userDispatch, {
        id: response.getUid(),
        name,
        point: DEFAULT_POINT,
      });
      updateGameStatus(pokerDispatch, {
        operator: '',
        status: response.getStatus(),
      });
      setName('');
      navigate('/poker-room');
    });
  };
  return (
    <div>
      <h1>Log In</h1>
      <form>
        {input}
        <button onClick={onClickHandler} type="submit">
          start a game
        </button>
      </form>
    </div>
  );
};

export default Login;
