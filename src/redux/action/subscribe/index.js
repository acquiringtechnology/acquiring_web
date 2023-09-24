import { apiCall } from "@/services/api";
import {
SUBSCRIBE_CREATE_ACTIONS
} from "@/redux/actionsType/subscribe";
import { subscribe } from "@/services/apiVariables";
import { Toast } from "@/services/toast";


export const subscribeCreate = (body) => (dispatch) => {
    dispatch({
      type: SUBSCRIBE_CREATE_ACTIONS.SUBSCRIBE_CREATE_ACTIONS_REQUEST,
      isSubscribeCreateLoader: true
    });
    return new Promise((resolve, reject) => {
      apiCall({ ...subscribe.create, body })
        .then((data) => {
          dispatch({
            type: SUBSCRIBE_CREATE_ACTIONS.SUBSCRIBE_CREATE_ACTIONS_RESPONSE,
            payload: data.data
          });
          Toast({ message:"Your subscription is successful. Now you will be notified with new updates from us!"});
          resolve(data);
        })
        .catch((error) => {
          let message = error?.message || "Something went wrong";
          Toast({ message, type: "error" });
          dispatch({
            type: SUBSCRIBE_CREATE_ACTIONS.SUBSCRIBE_CREATE_ACTIONS_ERROR
            //   payload: data.data
          });
          reject(error);
        });
    });
  };