import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class CreateChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.submitChannel = this.submitChannel.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  submitChannel(event) {
    event.preventDefault();
    this.props.postChannel(this.state);
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.submitChannel}>
        <div className="form-group">
          <label for="channelname">Channel Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Channel Name"
            onChange={this.onTextChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postChannel: newChannel => dispatch(actionCreators.postChannel(newChannel))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateChannel);
