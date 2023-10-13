import { WEBINARS_LIST_ACTIONS } from "../../actionsType/webinear";

const intialState = {
  webinarList: [],
  isWebinarListLoader: false,
};

export const WebinarReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_REQUEST:
      return { ...state, isWebinarListLoader: true };
    case WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_RESPONSE:
      return {
        ...state,
        webinarList: payload,
        isWebinarListLoader: false,
      };
    case WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_ERROR:
      return {
        ...state,
        webinarList: payload,
        isWebinarListLoader: false,
      };

    default:
      return state;
  }
};
