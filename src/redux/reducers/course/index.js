import {
  COURSE_LIST_ACTIONS,
  COURSE_CREATE_UPDATE_ACTIONS,
  COURSE_DELETE_ACTIONS
} from '../../actionsType/course';

const intialState = {
  courseList: [],
  isCourseListLoader: false,
  isCourseCreateLoader: false,
  courseCreateData: {},
  isCourseDeleteLoader: false
};

export const coursereducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_REQUEST:
      return { ...state, isSyllabusCreateLoader: true };
    case COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_RESPONSE:
      return {
        ...state,
        courseCreateData: payload,
        isCourseCreateLoader: false
      };
    case COURSE_CREATE_UPDATE_ACTIONS.COURSE_CREATE_UPDATE_ACTIONS_ERROR:
      return {
        ...state,
        courseCreateData: payload,
        isCourseCreateLoader: false
      };

    case COURSE_LIST_ACTIONS.COURSE_LIST_ACTIONS_REQUEST:
      return { ...state, isCourseListLoader: true };
    case COURSE_LIST_ACTIONS.COURSE_LIST_ACTIONS_RESPONSE:
      return {
        ...state,
        courseList: payload,
        isCourseListLoader: false
      };
    case COURSE_LIST_ACTIONS.COURSE_LIST_ACTIONS_ERROR:
      return {
        ...state,
        courseList: payload,
        isCourseListLoader: false
      };

    case COURSE_DELETE_ACTIONS.COURSE_DELETE_ACTIONS_REQUEST:
      return { ...state, isCourseDeleteLoader: true };
    case COURSE_DELETE_ACTIONS.COURSE_DELETE_ACTIONS_RESPONSE:
      return {
        ...state,
        isCourseDeleteLoader: false
      };
    case COURSE_DELETE_ACTIONS.COURSE_DELETE_ACTIONS_ERROR:
      return {
        ...state,
        isCourseDeleteLoader: false
      };

    default:
      return state;
  }
};
