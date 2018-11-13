import React, { Component } from "react";

import MessageForm from "./MessageForm";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class ChannelChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0
    };
  }
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
      <div className="container p-5">
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
