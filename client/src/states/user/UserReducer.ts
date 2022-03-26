/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DEFAULT_POINT } from '../../constant/constant';
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
  point: DEFAULT_POINT,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER: {
      return {
        id: action.user?.id ?? '',
        name: action.user?.name ?? '',
        point: DEFAULT_POINT,
      };
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};
