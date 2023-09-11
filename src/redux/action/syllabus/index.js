import { apiCall } from 'services/api';
import {
  SYLLABUS_CREATE_UPDATE_ACTIONS,
  SYLLABUS_LIST_ACTIONS,
  SYLLABUS_DELETE_ACTIONS
} from '../../actionsType/syllabus';
import { syllabus } from '../../../services/apiVariables';

export const syllabusCreate = (body) => (dispatch) => {
  dispatch({
    type: SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_REQUEST,
    isSyllabusCreateLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...syllabus.post, body })
      .then((data) => {
        dispatch({
          type: SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        console.log('userLogin api catch', error);
        dispatch({
          type: SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const syllabusUpdate = (body, id) => (dispatch) => {
  dispatch({
    type: SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_REQUEST,
    isSyllabusCreateLoader: true
  });
  return new Promise((resolve, reject) => {
    const prefixUrl = `/${id}`;
    apiCall({ ...syllabus.put, body, prefixUrl })
      .then((data) => {
        dispatch({
          type: SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        console.log('userLogin api catch', error);
        dispatch({
          type: SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const syllabusDeleteById = (id) => (dispatch) => {
  dispatch({
    type: SYLLABUS_DELETE_ACTIONS.SYLLABUS_DELETE_ACTIONS_REQUEST,
    isSyllabusDeleteLoader: true
  });
  return new Promise((resolve, reject) => {
    const prefixUrl = `/${id}`;
    apiCall({ ...syllabus.delete, prefixUrl })
      .then((data) => {
        dispatch({
          type: SYLLABUS_DELETE_ACTIONS.SYLLABUS_DELETE_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        console.log('userLogin api catch', error);
        dispatch({
          type: SYLLABUS_DELETE_ACTIONS.SYLLABUS_DELETE_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const getAllsyllabus = (body) => (dispatch) => {
  dispatch({
    type: SYLLABUS_LIST_ACTIONS.SYLLABUS_LIST_ACTIONS_REQUEST,
    isSyllabusListLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...syllabus.get, body })
      .then((data) => {
        dispatch({
          type: SYLLABUS_LIST_ACTIONS.SYLLABUS_LIST_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        console.log('userLogin api catch', error);
        dispatch({
          type: SYLLABUS_LIST_ACTIONS.SYLLABUS_LIST_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });
};
