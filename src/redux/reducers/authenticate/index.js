import { AUTHENTICATE_LOGIN_ACTIONS } from '../../actionsType/authenticate';

const intialState = {
  loginSucessData: [],
  isloginLoader: false
};

export const authenticateReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_REQUEST:
      return { ...state, isloginLoader: true };
    case AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_RESPONSE:
      return { ...state, loginSucessData: payload, isloginLoader: false };
    case AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_ERROR:
      return { ...state, loginSucessData: payload, isloginLoader: false };
    default:
      return state;
  }
};
