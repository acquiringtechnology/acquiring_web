import { apiCall } from '@/services/api';
import {
CANDIDATE_CREATE_UPDATE_ACTIONS
} from '@/redux/actionsType/candidate';
import { candidate } from '@/services/apiVariables';
import { Toast } from "@/services/toast";


export const candidateUpdate = (body, id) => (dispatch) => {
    dispatch({
      type: CANDIDATE_CREATE_UPDATE_ACTIONS.CANDIDATE_CREATE_UPDATE_ACTIONS_REQUEST,
      isCourseCreateLoader: true
    });
    return new Promise((resolve, reject) => {
      const prefixUrl = `/${id}`;
      apiCall({ ...candidate.put, body, prefixUrl })
        .then((data) => {
          dispatch({
            type: CANDIDATE_CREATE_UPDATE_ACTIONS.CANDIDATE_CREATE_UPDATE_ACTIONS_RESPONSE,
            payload: data.data
          });
          Toast({ message:"You have successfully updated your profile."});
          resolve(data);
        })
        .catch((error) => {
          let message = error?.message || "Something went wrong";
          Toast({ message, type: "error" });
          dispatch({
            type: CANDIDATE_CREATE_UPDATE_ACTIONS.CANDIDATE_CREATE_UPDATE_ACTIONS_ERROR
            //   payload: data.data
          });
          reject(error);
        });
    });
  };