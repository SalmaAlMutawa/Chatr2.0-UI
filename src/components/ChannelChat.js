import React, { Component } from "react";

import MessageForm from "./MessageForm";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class ChannelChat extends Component {
  // onSubmit(event) {
  //   event.preventDefault();
  //   let channelName = this.props.match.params.name;
  //   let theChannel = this.props.channels.find(channel => {
  //     return channel.name === channelName;
  //   });
  // }

  componentDidMount() {
    let channelName = this.props.match.params.name;
    let theChannel = this.props.channels.find(channel => {
      return channel.name === channelName;
    });
    if (theChannel) {
      this.props.getChannelChat(theChannel.id);
    }
  }

  componentDidUpdate(prevProps) {
    let channelName = this.props.match.params.name;
    if (
      channelName !== prevProps.match.params.name ||
      prevProps.channels.length !== this.props.channels.length
    ) {
      let theChannel = this.props.channels.find(channel => {
        return channel.name === channelName;
      });
      if (theChannel) {
        this.props.getChannelChat(theChannel.id);
      }
    }
  }

  render() {
    let channelName = this.props.match.params.name;
    let theChannel = this.props.channels.find(channel => {
      return channel.name === channelName;
    });
    return (
      <div>
        {this.props.messages.map(msg => (
          <div key={msg.id}>
            <h3>{msg.username}:</h3>
            <p>{msg.message}</p>
          </div>
        ))}
        {theChannel && <MessageForm channelID={theChannel.id} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels.channels,
    messages: state.channelChat.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannelChat: channelID =>
      dispatch(actionCreators.fetchChannelChat(channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelChat);
