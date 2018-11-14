import React, { Component } from "react";

import ChannelChat from "./ChannelChat";

class Messages extends Component {
  render() {
    return (
      <div className="speech-bubble">
        <h3 style={{ textIndent: "20px" }}>{this.props.msg.username}:</h3>
        <p
          style={{
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            textIndent: "40px"
          }}
        >
          {this.props.msg.message}
        </p>
      </div>
    );
  }
}

export default Messages;
