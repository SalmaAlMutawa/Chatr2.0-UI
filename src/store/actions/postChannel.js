import * as actionTypes from "./actionTypes";

import axios from "axios";

export const postChannel = (newChannel, history) => {
  console.log(newChannel);
  return dispatch => {
    axios
      .post("https://api-chatr.herokuapp.com/channels/create/", newChannel)
      .then(res => res.data)
      .then(createdChannel => {
        dispatch({ type: actionTypes.POST_CHANNEL, payload: createdChannel });
        history.push(`/channels/${createdChannel.name}`);
      })
      .catch(error => console.log(error.response));
  };
};
