import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// Components

import ChannelNavLink from "./ChannelNavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class LoggedInSideNav extends Component {
  componentDidMount() {
    this.props.fetchChannels();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.channels.length !== this.props.channels.length)
      this.props.fetchChannels();
  }
  render() {
    const channelLinks = this.props.channels.map(channel => (
      <ChannelNavLink key={channel.name} channel={channel} />
    ));

    return (
      <ul
        className="navbar-nav navbar-sidenav"
        id="exampleAccordion"
        style={{ overflowY: "scroll" }}
      >
        <li className="nav-item" data-toggle="tooltip" data-placement="right">
          <Link className="nav-link heading" to="/createChannel">
            <span className="nav-link-text mr-2">Channels</span>
            <FontAwesomeIcon icon={faPlusCircle} />
          </Link>
        </li>
        {channelLinks}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  channels: state.channels.channels
});

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(actionCreators.fetchChannels())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoggedInSideNav)
);
