import { apiCall } from '@/services/api';
import {
WEBINARS_LIST_ACTIONS
} from '@/redux/actionsType/webinear';
import { webinar } from '@/services/apiVariables';
import { Toast } from "@/services/toast";

export const getAllWebinear = (body) => (dispatch) => {
  dispatch({
    type: WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_REQUEST,
    isWebinarListLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...webinar.get, body })
      .then((data) => {
        dispatch({
          type: WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};
