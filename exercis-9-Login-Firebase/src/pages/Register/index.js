import React, { Component } from "react";
import "./register.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";
import ButtonLoading from "../../components/atom/buttonLoading.js";

class Register extends Component {
  state = {
    email: undefined,
    register: undefined,
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
      }, 5000);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
    alert("Register berhasil");
    window.location = "/Login";
  };

  render() {
    return (
      <div className="Register">
        <h1>Register..</h1>
        <Form className="fromLogin">
          <Form.Group htmlFor="email">
            <Form.Control
              type="email"
              placeholder="Enter email..."
              onChange={this.handleChange}
              id="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group htmlFor="password">
            <Form.Control
              type="password"
              placeholder="Enter password..."
              onChange={this.handleChange}
              id="password"
              autoComplete="off"
            />
          </Form.Group>

          <ButtonLoading
            onClick={this.handleSubmitRegister}
            title="Register"
            loading={this.state.isLoading}
          />
          <Link to="/login">
            <Button variant="primary" type="Button">
              Back
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

export default Register;
