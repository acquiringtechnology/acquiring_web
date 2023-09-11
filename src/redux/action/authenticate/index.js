import { apiCall } from 'services/api';
import { AUTHENTICATE_LOGIN_ACTIONS } from '../../actionsType/authenticate';
import { authenticate } from '../../../services/apiVariables';
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
