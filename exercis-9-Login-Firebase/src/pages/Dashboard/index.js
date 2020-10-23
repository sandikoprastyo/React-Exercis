import React, { Component } from "react";
import { connect } from "react-redux";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    return <div className="dashboard">Dashboard {this.props.usernames}</div>;
  }
}
const reduxState = (state) => ({ usernames: state.username });

export default connect(reduxState, null)(Dashboard);
