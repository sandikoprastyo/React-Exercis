import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebaseLogin from "../config/API/firebaseLogin";
import { connect } from "react-redux";
import actionUserName from "../config/redux/action/";

class LoginAuth extends Component {
  state = {
    email: "",
    password: "",
  };

  //onSubmit login user
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    /* console.log(email);
    console.log(password); */
    firebaseLogin(email, password);
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div className="flex flex-col justify-center text-center shadow-lg py-20">
        <h1>Login</h1>
        <div className="flex-row ">
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Your email..."
              className="border-b-2 border-gray-400 focus:bg-white border-transparent"
              type="text"
              id="email"
              required
              onChange={this.handleChangeText}
            />
            <input
              placeholder="Your password..."
              className="border-b-2 border-gray-400 focus:bg-white border-transparent my-10 mx-10 "
              type="password"
              autocomplete="current-password"
              required
              id="password"
              onChange={this.handleChangeText}
            />
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            />
            <Link to="/Register">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  popupProps: state.popup,
  userName: state.user,
});

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(actionUserName()),
});

export default connect(reduxState, reduxDispatch)(LoginAuth);