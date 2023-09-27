import { CANDIDATE_CREATE_UPDATE_ACTIONS } from "../../actionsType/candidate";

const intialState = {
  CandidateSucessData: {},
  isCandidateCreateLoader: false,
};

export const candidatereducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CANDIDATE_CREATE_UPDATE_ACTIONS.CANDIDATE_CREATE_UPDATE_ACTIONS_REQUEST:
      return { ...state, isCandidateCreateLoader: true };
    case CANDIDATE_CREATE_UPDATE_ACTIONS.CANDIDATE_CREATE_UPDATE_ACTIONS_RESPONSE:
      return {
        ...state,
        CandidateSucessData: payload,
        isCourseCreateLoader: false,
      };
    case CANDIDATE_CREATE_UPDATE_ACTIONS.CANDIDATE_CREATE_UPDATE_ACTIONS_ERROR:
      return {
        ...state,
        CandidateSucessData: payload,
        isCourseCreateLoader: false,
      };

      default:
        return state;
  }
};
