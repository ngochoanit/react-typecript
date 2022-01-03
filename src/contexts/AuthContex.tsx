import { createContext, ReactNode, useReducer } from 'react';
import { AuthReducer, AuthState } from 'src/reducers/AuthReducer';
import { AuthActionType } from 'src/reducers/types';

interface AuthContextProps {
  children: ReactNode;
}
const authDefault = {
  username: '',
  isAuthenticated: false,
};
interface IAuthContextProvider {
  authInfo: AuthState;
  toggleAuth: (username: string) => void;
}

export const AuthContext = createContext<IAuthContextProvider>({
  authInfo: authDefault,
  toggleAuth: () => {},
});
const { TOGGLE_AUTH } = AuthActionType;
const AuthProvider = ({ children }: AuthContextProps) => {
  const [authInfo, dispatch] = useReducer(AuthReducer, authDefault);
  const toggleAuth = (username: string) =>
    dispatch({ type: TOGGLE_AUTH, payload: username });
  const authContexData = {
    authInfo,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContexData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
