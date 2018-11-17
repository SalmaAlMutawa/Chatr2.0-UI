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
    console.log(this.props);
    this.props.postChannel(this.state, this.props.history);
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      // <div className="container p-5">
      //   <div className="modal" tabindex="-1" role="dialog">
      //     <div className="modal-dialog" role="document">
      //       <div className="modal-content">
      //         <div className="modal-header">
      //           <h5 className="modal-title">Create Channel</h5>
      //           <button type="button" className="close" data-dismiss="modal">
      //             <span aria-hidden="true">&times;</span>
      //           </button>
      //         </div>
      //         <div className="modal-body">
      //           <form onSubmit={this.submitChannel}>
      //             <div className="form-group">
      //               <label for="channelname">Channel Name</label>
      //               <input
      //                 type="text"
      //                 className="form-control"
      //                 name="name"
      //                 placeholder="Channel Name"
      //                 onChange={this.onTextChange}
      //               />
      //             </div>
      //           </form>
      //         </div>
      //         <div className="modal-footer">
      //           <button
      //             type="button"
      //             className="btn btn-secondary"
      //             data-dismiss="modal"
      //           >
      //             Cancel
      //           </button>
      //           <button type="submit" className="btn btn-primary">
      //             Create
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="container p-5">
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
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postChannel: (newChannel, history) =>
      dispatch(actionCreators.postChannel(newChannel, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateChannel);
