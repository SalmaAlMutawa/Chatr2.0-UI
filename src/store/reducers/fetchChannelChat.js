import * as actionTypes from "../actions/actionTypes";

const initialState = {
  messages: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_CHAT:
      return {
        ...state,
        messages: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
