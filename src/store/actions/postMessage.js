import * as actionTypes from "./actionTypes";

import axios from "axios";

export const postMessage = (message, channelID) => {
  console.log(message);
  return dispatch => {
    axios
      .post(
        `https://api-chatr.herokuapp.com/channels/${channelID}/send/`,
        message
      )
      .then(res => res.data)
      .then(message => {
        dispatch({ type: actionTypes.POST_MESSAGE, payload: message });
      })
      .catch(error => console.log(error.response));
  };
};
