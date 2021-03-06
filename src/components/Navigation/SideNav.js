import React from "react";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Components

import LoggedInSideNav from "./LoggedInSideNav";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const emptyChannelLinks = [];

    return (
      <div>
        {this.props.user ? <LoggedInSideNav /> : emptyChannelLinks}
        <ul className="navbar-nav sidenav-toggler" id="sideNav">
          <li className="nav-item">
            <span
              className="nav-link text-center"
              id="sidenavToggler"
              onClick={() =>
                this.setState(prevState => ({
                  collapsed: !prevState.collapsed
                }))
              }
            >
              <FontAwesomeIcon
                icon={this.state.collapsed ? faAngleRight : faAngleLeft}
              />
            </span>
          </li>
        </ul>
      </div>
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
  )(SideNav)
);
