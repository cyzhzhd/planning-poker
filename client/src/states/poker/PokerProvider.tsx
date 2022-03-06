import React, { FC, useReducer } from 'react';
import { PokerStateContext, PokerDispatchContext } from './PokerContext';
import { reducer, initialState } from './PokerReducer';

const PokerProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokerDispatchContext.Provider value={dispatch}>
      <PokerStateContext.Provider value={state}>
        {children}
      </PokerStateContext.Provider>
    </PokerDispatchContext.Provider>
  );
};

export default PokerProvider;
