import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_code from "jwt-decode";
import Landing from "./layout/Landing";
import Login from "../LoginContainer/auth/Login";

class LoginContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route to="/" component={Landing} />
          <Route to="/register" component={Landing} />
          <Route to="/login" component={Login} />
          <Switch>PrivateR</Switch>
        </div>
      </Router>
    );
  }
}

export default LoginContainer;
