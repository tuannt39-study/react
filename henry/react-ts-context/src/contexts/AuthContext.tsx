import { createContext, ReactNode, useReducer } from 'react';
import { authReducer, AuthState, AuthAction } from '../reducers/AuthReducer';
import { AuthActionType } from '../reducers/types';

interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextDefault {
  authInfo: AuthState;
  toggleAuth: (username: string) => void;
}

const authStateDefault: AuthState = {
  isAuthenticated: false,
  username: '',
};

const authDataDefault: AuthContextDefault = {
  authInfo: authStateDefault,
  toggleAuth: () => null,
};

export const AuthContext = createContext<AuthContextDefault>(authDataDefault);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const { children } = props;

  const [authInfo, dispatch] = useReducer(authReducer, authStateDefault);

  const { TOGGLE_AUTH } = AuthActionType;

  const toggleAuth = (username: string) => {
    const auth: AuthAction = {
      type: TOGGLE_AUTH,
      payload: username,
    };
    dispatch(auth);
  };

  const authContextData: AuthContextDefault = {
    authInfo,
    toggleAuth,
  };

  return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
