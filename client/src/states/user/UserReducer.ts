import { User } from '../../proto/poker_pb';

export enum ActionTypes {
  UPDATE_USER = 'updateUser',
}

export interface UserAction {
  type: ActionTypes.UPDATE_USER;
  user?: {
    id: string;
    name: string;
  };
}

export const initialState: User.AsObject = {
  id: '',
  name: '',
};

export const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER: {
      return {
        id: action.user?.id ?? '',
        name: action.user?.name ?? '',
      };
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};
