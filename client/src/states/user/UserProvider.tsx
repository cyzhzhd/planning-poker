import React, { FC, useReducer } from 'react';
import { UserStateContext, UserDispatchContext } from './UserContext';
import { reducer, initialState } from './UserReducer';

const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export default UserProvider;
