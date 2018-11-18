import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  submitMessage(event) {
    event.preventDefault();
    this.props.postMessage(this.state, this.props.channelID);
    this.setState({ message: "" });
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitMessage}>
        <div className="form-group p-5">
          <input
            type="text"
            className="form-control"
            name="message"
            value={this.state.message}
            placeholder="What's on your mind?"
            onChange={this.onTextChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Share
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postMessage: (newMessage, channelID) =>
      dispatch(actionCreators.postMessage(newMessage, channelID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MessageForm);
