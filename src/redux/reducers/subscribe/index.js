import { SUBSCRIBE_CREATE_ACTIONS } from "../../actionsType/subscribe";

const intialState = {
  subscribeCreateData: {},
  isSubscribeCreateLoader: false,
};

export const subscribeReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case SUBSCRIBE_CREATE_ACTIONS.SUBSCRIBE_CREATE_ACTIONS_REQUEST:
          return { ...state, isSubscribeCreateLoader: true };
        case SUBSCRIBE_CREATE_ACTIONS.SUBSCRIBE_CREATE_ACTIONS_RESPONSE:
          return { ...state, subscribeCreateData: payload, isSubscribeCreateLoader: false };
        case SUBSCRIBE_CREATE_ACTIONS.SUBSCRIBE_CREATE_ACTIONS_ERROR:
          return { ...state, subscribeCreateData: payload, isSubscribeCreateLoader: false };
          default:
            return state;
    }
}
