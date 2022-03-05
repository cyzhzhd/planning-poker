import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/poker-room');
  };
  return (
    <div>
      <h1>Welcome to the Planning Poker</h1>
      <button onClick={onClickHandler}>start a game</button>
    </div>
  );
};

export default Home;
