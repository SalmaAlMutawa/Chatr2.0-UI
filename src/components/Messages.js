import React, { Component } from "react";

import ChannelChat from "./ChannelChat";

class Messages extends Component {
  render() {
    let sender = this.props.msg.username;
    let user = this.props.user.username;
    const senderIsUser = () => {
      if (sender === user) {
        return true;
      } else {
        return false;
      }
    };

    const pad = num => {
      return ("0" + num).slice(-2);
    };
    const getTimeFromDate = timestamp => {
      let date = new Date(timestamp);
      console.log(date);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      return pad(hours) + ":" + pad(minutes);
    };

    return (
      <div>
        {senderIsUser() ? (
          <div className="speech-bubble-sender px-5">
            <p
              style={{
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
                textIndent: "40px",
                textAlign: "right"
              }}
            >
              {this.props.msg.message}
            </p>

            <p style={{ fontSize: "15px", fontStyle: "italic" }}>
              {getTimeFromDate(this.props.msg.timestamp.getMinutes)}
            </p>
          </div>
        ) : (
          <div className="speech-bubble px-3">
            <h3 style={{ textIndent: "20px" }}>{this.props.msg.username}</h3>
            <p
              style={{
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
                textIndent: "40px"
              }}
            >
              {this.props.msg.message}
            </p>
            <p
              style={{
                textAlign: "right",
                fontSize: "15px",
                fontStyle: "italic"
              }}
            >
              {getTimeFromDate(this.props.msg.timestamp.getMinutes)}
            </p>
          </div>
        )}
      </div>
    );
  }
}
export default Messages;
