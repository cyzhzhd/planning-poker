import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './presenters/Home';
import Login from './presenters/Login';
import PokerRoom from './presenters/PokerRoom';
import PokerProvider from './states/poker/PokerProvider';
import UserProvider from './states/user/UserProvider';

const App: FC = () => {
  return (
    <BrowserRouter>
      <PokerProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="poker-room" element={<PokerRoom />} />
          </Routes>
        </UserProvider>
      </PokerProvider>
    </BrowserRouter>
  );
};

export default App;
