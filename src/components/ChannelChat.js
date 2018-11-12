import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

import Loading from "./Loading";

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
    // if (this.props.loading) {
    //   return <Loading />;
    // } else {
    return (
      <div>
        <h4>{"change me to display msgs of the channel"}</h4>
      </div>
    );
    // }
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels.channels,
    messages: state.channelChat.messages,
    loading: state.channelChat.loading
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
