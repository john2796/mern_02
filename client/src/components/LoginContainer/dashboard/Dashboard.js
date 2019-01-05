import React, { Component } from "react";
import PropTypes from "prop-types";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Hey there, (add user name here later)</b>
                <p className="flow-text grey-text text-darken-1">
                  You are logged into a full-stack
                  <span style={{ fontFamily: "monospace" }}>MERN</span> app
                </p>
              </h4>
              <button className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Logout
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default Dashboard;
