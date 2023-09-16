import {
  AUTHENTICATE_LOGIN_ACTIONS,
  AUTHENTICATE_REGISTER_ACTIONS,
  AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS
} from "../../actionsType/authenticate";

const intialState = {
  loginSucessData: [],
  isloginLoader: false,
  registerSucessData: {},
  isRegisterLoader: false,
  isEmailVerificationLoader:false,
  emailVerificationData:{}
};

export const authenticateReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_REQUEST:
      return { ...state, isloginLoader: true };
    case AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_RESPONSE:
      return { ...state, loginSucessData: payload, isloginLoader: false };
    case AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_ERROR:
      return { ...state, loginSucessData: payload, isloginLoader: false };

      case AUTHENTICATE_REGISTER_ACTIONS.AUTHENTICATE_REGISTER_REQUEST:
        return { ...state, isRegisterLoader: true };
      case AUTHENTICATE_REGISTER_ACTIONS.AUTHENTICATE_REGISTER_RESPONSE:
        return { ...state, registerSucessData: payload, isRegisterLoader: false };
      case AUTHENTICATE_REGISTER_ACTIONS.AUTHENTICATE_REGISTER_ERROR:
        return { ...state, registerSucessData: payload, isRegisterLoader: false };

        case AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS.AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_REQUEST:
          return { ...state, isEmailVerification: true };
        case AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS.AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_RESPONSE:
          return { ...state, emailVerificationData: payload, isEmailVerificationLoader: false };
        case AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS.AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ERROR:
          return { ...state, emailVerificationData: payload, isEmailVerificationLoader: false };

    default:
      return state;
  }
};
