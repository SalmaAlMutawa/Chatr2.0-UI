import * as actionTypes from "./actionTypes";

import axios from "axios";

export const fetchChannelChat = channelID => {
  console.log("FETCH");
  return dispatch => {
    axios
      .get(`https://api-chatr.herokuapp.com/channels/${channelID}/`)
      .then(res => res.data)
      .then(
        messages =>
          dispatch({
            type: actionTypes.FETCH_CHANNEL_CHAT,
            payload: messages
          })
        // history.push(`/channels/${channelID}/`)
      )
      .catch(error => console.error(error));
  };
};
