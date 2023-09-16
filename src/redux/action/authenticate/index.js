import { apiCall } from '@/services/api';
import { AUTHENTICATE_LOGIN_ACTIONS,AUTHENTICATE_REGISTER_ACTIONS ,AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS} from '@/redux/actionsType/authenticate';
import { authenticate } from '@/services/apiVariables';
import { Toast } from '@/services/toast';
// import { Toast } from '../../../services/toast';

export const userLogin = (body) => (dispatch) => {
  console.log('userLogin api');
  dispatch({
    type: AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_REQUEST,
    isloginLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...authenticate.login, body })
      .then((data) => {
        dispatch({
          type: AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        console.log('userLogin api catch', error);
        dispatch({
          type: AUTHENTICATE_LOGIN_ACTIONS.AUTHENTICATE_LOGIN_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};


export const userRegister = (body) => (dispatch) => {
  console.log('userLogin api');
  dispatch({
    type: AUTHENTICATE_REGISTER_ACTIONS.AUTHENTICATE_REGISTER_REQUEST,
    isRegisterLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...authenticate.register, body })
      .then((data) => {
        dispatch({
          type: AUTHENTICATE_REGISTER_ACTIONS.AUTHENTICATE_REGISTER_RESPONSE,
          payload: data.data
        });
        Toast({message:"Check your inbox for an email with instructions to verify your email address."})
        resolve(data);
      })
      .catch((error) => {
        console.log('userLogin api catch', error);
        dispatch({
          type: AUTHENTICATE_REGISTER_ACTIONS.AUTHENTICATE_REGISTER_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const userRegisterEmailVerification = (id) => (dispatch) => {
  console.log('userLogin api');
  dispatch({
    type: AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS.AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_REQUEST,
    isEmailVerificationLoader: true
  });
  return new Promise((resolve, reject) => {
    const prefixUrl = `/${id}`;
    apiCall({ ...authenticate.emailVerificasion, prefixUrl })
      .then((data) => {
        dispatch({
          type: AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS.AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_RESPONSE,
          payload: data.data
        });
        Toast({message:"Thank you, your email has been verified."})
        resolve(data);
      })
      .catch((error) => {
        console.log('userLogin api catch', error);
        dispatch({
          type: AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ACTIONS.AUTHENTICATE_REGISTER_EMAIL_VERIFICATION_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};
