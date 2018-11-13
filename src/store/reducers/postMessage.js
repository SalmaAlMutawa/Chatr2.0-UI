import * as actionTypes from "../actions/actionTypes";

const initialState = {
  messages: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_MESSAGE:
      return {
        ...state,
        messages: state.channels.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
