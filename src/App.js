import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import CreateChannel from "./components/CreateChannel";
import ChannelChat from "./components/ChannelChat";

class App extends Component {
  render() {
    return (
      <div
        className="content-wrapper"
        style={{ backgroundColor: "rgb(240,248,255)" }}
      >
        <NavBar />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/(login|signup)" component={RegistrationForm} />
          <PrivateRoute path="/private" component={SuperSecretPage} />
          <PrivateRoute path="/createChannel" component={CreateChannel} />
          <PrivateRoute path="/channels/:name" component={ChannelChat} />
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
