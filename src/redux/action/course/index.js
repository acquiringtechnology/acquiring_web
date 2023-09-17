import { apiCall } from '@/services/api';
import {
  COURSE_LIST_ACTIONS,
  COURSE_CREATE_UPDATE_ACTIONS,
  COURSE_DELETE_ACTIONS
} from '@/redux/actionsType/course';
import { course } from '@/services/apiVariables';
import { Toast } from "@/services/toast";

export const getAllCoures = (body) => (dispatch) => {
  dispatch({
    type: COURSE_LIST_ACTIONS.COURSE_LIST_ACTIONS_REQUEST,
    isCourseListLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...course.get, body })
      .then((data) => {
        dispatch({
          type: COURSE_LIST_ACTIONS.COURSE_LIST_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: COURSE_LIST_ACTIONS.COURSE_LIST_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const couresCreate = (body) => (dispatch) => {
  dispatch({
    type: COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_REQUEST,
    isCourseCreateLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...course.post, body })
      .then((data) => {
        dispatch({
          type: COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const couresUpdate = (body, id) => (dispatch) => {
  dispatch({
    type: COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_REQUEST,
    isCourseCreateLoader: true
  });
  return new Promise((resolve, reject) => {
    const prefixUrl = `/${id}`;
    apiCall({ ...course.put, body, prefixUrl })
      .then((data) => {
        dispatch({
          type: COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const couresDeleteById = (id) => (dispatch) => {
  dispatch({
    type: COURSE_DELETE_ACTIONS.COURSE_DELETE_ACTIONS_REQUEST,
    isCourseDeleteLoader: true
  });
  return new Promise((resolve, reject) => {
    const prefixUrl = `/${id}`;
    apiCall({ ...course.delete, prefixUrl })
      .then((data) => {
        dispatch({
          type: COURSE_DELETE_ACTIONS.COURSE_DELETE_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: COURSE_DELETE_ACTIONS.COURSE_DELETE_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};
