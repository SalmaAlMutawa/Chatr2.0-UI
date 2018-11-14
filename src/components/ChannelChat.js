import React, { Component } from "react";

import MessageForm from "./MessageForm";

import { StickyContainer, Sticky } from "react-sticky";

import Messages from "./Messages";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class ChannelChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
  }

  componentDidMount() {
    let channelName = this.props.match.params.name;
    let theChannel = this.props.channels.find(channel => {
      return channel.name === channelName;
    });
    clearInterval(this.state.timer);
    if (theChannel) {
      let timerN = setInterval(() => {
        this.props.getChannelChat(theChannel.id);
      }, 1000);
      this.setState({ timer: timerN });
    }
  }

  componentDidUpdate(prevProps) {
    let channelName = this.props.match.params.name;
    if (
      channelName !== prevProps.match.params.name ||
      prevProps.channels.length !== this.props.channels.length ||
      this.props.channels !== prevProps.channels
    ) {
      let newChannelName = this.props.match.params.name;
      let theChannel = this.props.channels.find(channel => {
        return channel.name === newChannelName;
      });
      clearInterval(this.state.timer);
      if (theChannel) {
        let timerN = setInterval(() => {
          this.props.getChannelChat(theChannel.id);
        }, 1000);
        this.setState({ timer: timerN });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    let channelName = this.props.match.params.name;
    let theChannel = this.props.channels.find(channel => {
      return channel.name === channelName;
    });
    return (
      <div className="container p-4">
        <StickyContainer>
          <Sticky>
            {({ style, isSticky }) => (
              <h1
                style={{
                  fontFamily: "Impact, Charcoal, sans-serif"
                }}
              >
                {channelName}
              </h1>
            )}
          </Sticky>
        </StickyContainer>

        <div className="container">
          <div>
            {this.props.messages.map(msg => (
              <div key={msg.id}>
                <Messages msg={msg} />
              </div>
            ))}
            {theChannel && <MessageForm channelID={theChannel.id} />}
          </div>
        </div>
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
