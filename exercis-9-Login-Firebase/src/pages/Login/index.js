import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import firebase from "../../config/firebase";
import ButtonLoading from "../../components/atom/buttonLoading.js";
import * as firebaseui from "firebaseui";

let uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    /* firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID, */
    //firebase.auth.EmailAuthProvider.PROVIDER_ID,
    /* firebase.auth.PhoneAuthProvider.PROVIDER_ID, */
    /* firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID, */
  ],
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start("#firebaseui-auth-container", uiConfig);

class Login extends Component {
  state = {
    email: undefined,
    password: undefined,
    isLoading: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      [e.target.id]: e.target.value,
    });
  };

  //! Validation belom
  handleSubmitRegister = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if ((email, password === undefined)) {
      alert("From tidak boleh kosong");
      return false;
    } else {
      //console.log(this.state.email);
      //console.log(this.state.password);
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 4000);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          window.location = "/";
          //alert("Welcome... ", +res);
        })
        .catch(function (error) {
          //const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          return false;
        });
    }
  };

  //logingoogle

  render() {
    return (
      <div className="Login">
        <h1>Welcome...</h1>
        <Form className="fromLogin">
          <Form.Group htmlFor="email">
            <Form.Control
              id="email"
              type="email"
              placeholder="Enter email..."
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group htmlFor="password">
            <Form.Control
              id="password"
              autoComplete="off"
              type="password"
              placeholder="Enter Password..."
              onChange={this.handleChange}
            />
          </Form.Group>

          <ButtonLoading
            onClick={this.handleSubmitRegister}
            title="Login"
            loading={this.state.isLoading}
          />
          <Link to="/register">
            <Button variant="primary" type="Button">
              Register
            </Button>
            <div id="firebaseui-auth-container"></div>
          </Link>
        </Form>
      </div>
    );
  }
}

export default Login;
