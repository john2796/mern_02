import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import jwt_code from "jwt-decode";

import Landing from "./layout/Landing";

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

export default LoginContainer;
