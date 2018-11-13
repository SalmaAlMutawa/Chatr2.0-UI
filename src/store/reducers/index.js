import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import channelReducer from "./fetchChannels";
import chatReducer from "./fetchChannelChat";
import messagesReducer from "./postMessage";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  channels: channelReducer,
  channelChat: chatReducer,
  channelMsgs: messagesReducer
});
