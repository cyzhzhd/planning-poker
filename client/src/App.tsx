import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './presenters/Home';
import Login from './presenters/Login';
import PokerRoom from './presenters/PokerRoom';
import UserProvider from './states/user/UserProvider';

const App: FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="poker-room" element={<PokerRoom />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
