import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './presenters/Home';
import PokerRoom from './presenters/PokerRoom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="poker-room" element={<PokerRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
