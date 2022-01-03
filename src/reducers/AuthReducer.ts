import { AuthActionType } from './types';
const { TOGGLE_AUTH } = AuthActionType;
interface AuthAction {
  type: AuthActionType;
  payload: string;
}
export interface AuthState {
  username: string;
  isAuthenticated: boolean;
}

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: action.payload,
      };
    default:
      throw new Error();
  }
};
