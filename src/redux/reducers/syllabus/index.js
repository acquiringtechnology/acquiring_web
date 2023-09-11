import {
  SYLLABUS_CREATE_UPDATE_ACTIONS,
  SYLLABUS_LIST_ACTIONS,
  SYLLABUS_DELETE_ACTIONS
} from '../../actionsType/syllabus';

const intialState = {
  syllabusList: [],
  isSyllabusListLoader: false,
  isSyllabusCreateLoader: false,
  isSyllabusDeleteLoader: false,
  syllabusCreateData: {}
};

export const syllabusreducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_REQUEST:
      return { ...state, isSyllabusCreateLoader: true };
    case SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_RESPONSE:
      return {
        ...state,
        syllabusCreateData: payload,
        isSyllabusCreateLoader: false
      };
    case SYLLABUS_CREATE_UPDATE_ACTIONS.SYLLABUS_CREATE_UPDATE_ACTIONS_ERROR:
      return {
        ...state,
        syllabusCreateData: payload,
        isSyllabusCreateLoader: false
      };

    case SYLLABUS_LIST_ACTIONS.SYLLABUS_LIST_ACTIONS_REQUEST:
      return { ...state, isSyllabusListLoader: true };
    case SYLLABUS_LIST_ACTIONS.SYLLABUS_LIST_ACTIONS_RESPONSE:
      return {
        ...state,
        syllabusList: payload,
        isSyllabusListLoader: false
      };
    case SYLLABUS_LIST_ACTIONS.SYLLABUS_LIST_ACTIONS_ERROR:
      return {
        ...state,
        syllabusList: payload,
        isSyllabusListLoader: false
      };

    case SYLLABUS_DELETE_ACTIONS.SYLLABUS_DELETE_ACTIONS_REQUEST:
      return { ...state, isSyllabusDeleteLoader: true };
    case SYLLABUS_DELETE_ACTIONS.SYLLABUS_DELETE_ACTIONS_RESPONSE:
      return {
        ...state,
        isSyllabusDeleteLoader: false
      };
    case SYLLABUS_DELETE_ACTIONS.SYLLABUS_DELETE_ACTIONS_ERROR:
      return {
        ...state,
        isSyllabusDeleteLoader: false
      };

    default:
      return state;
  }
};
