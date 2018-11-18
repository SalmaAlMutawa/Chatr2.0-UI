import React, { Component } from "react";

import MessageForm from "./MessageForm";

import { StickyContainer, Sticky } from "react-sticky";
import StickyHeader from "react-sticky-header";

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
        <StickyHeader>
          <div className="Header_root">
            <h1
              style={{
                position: "fixed",
                top: "90px",
                width: "100%",
                lineHeight: "60px",
                display: "inline-block",
                fontFamily: "Impact, Charcoal, sans-serif",
                backgroundColor: "rgb(169,169,169)"
              }}
            >
              {channelName}
            </h1>
          </div>
        </StickyHeader>
        <div className="container">
          <div>
            {this.props.messages.map(msg => (
              <div key={msg.id}>
                <Messages msg={msg} user={this.props.user} />
              </div>
            ))}
            <div className="container p-3">
              {theChannel && <MessageForm channelID={theChannel.id} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channels: state.channels.channels,
    messages: state.channelChat.messages,
    user: state.auth.user
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
