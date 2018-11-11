import * as actionTypes from "./actionTypes";

import axios from "axios";

export const fetchChannels = () => {
  return dispatch => {
    axios
      .get("https://api-chatr.herokuapp.com/channels/")
      .then(res => res.data)
      .then(channels =>
        dispatch({ type: actionTypes.FETCH_CHANNELS, payload: channels })
      )
      .catch(error => console.error(error));
  };
};
