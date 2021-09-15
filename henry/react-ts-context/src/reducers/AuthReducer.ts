import { AuthActionType } from './types';

export interface AuthState {
  isAuthenticated: boolean;
  username: string;
}

export type AuthAction = {
  type: AuthActionType;
  payload: string;
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  const { type, payload } = action;
  const { TOGGLE_AUTH } = AuthActionType;

  switch (type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: payload,
      };
    default:
      return state;
  }
};
