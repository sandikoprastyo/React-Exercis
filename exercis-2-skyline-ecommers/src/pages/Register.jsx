import React, { Component } from 'react';
import firebaseRegis from '../config/API/firebaseRegis';
import Button from '../components/atom/button/buttonRegister';
import { connect } from 'react-redux';
import actionRegister from '../config/redux/action';

class Register extends Component {
  handleChangeText = (element) => {
    this.setState({
      [element.target.id]: element.target.value,
      [element.target.id]: element.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    console.log('email', this.state.email);
    console.log('password', this.state.password);
    this.props.registerApi({ email, password });
    firebaseRegis(email, password);
  };

  render() {
    return (
      <div className='pt-32'>
        <div className='flex flex-col justify-center text-center shadow-lg py-20'>
          <h1>Register</h1>
          <div className='flex-row'>
            <input
              placeholder='Your email'
              className='border-b-2 border-gray-400 focus:bg-white border-transparent focus:outline-none focus:shadow-outline focus:border-blue-300 ...'
              type='text'
              onChange={this.handleChangeText}
              id='email'
            />
            <input
              id='password'
              placeholder='Your password'
              className='border-b-2 border-gray-400 focus:bg-white border-transparent my-10 mx-10 focus:outline-none focus:shadow-outline focus:border-blue-300 ...'
              type='password'
              onChange={this.handleChangeText}
            />
            <Button
              Loading={this.props.isLoading}
              onClick={this.handleRegisterSubmit}
              title='Register'
            />
          </div>
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isloading,
});

const reduxDispatch = (dispatch) => ({
  registerApi: () => dispatch(actionRegister()),
});

export default connect(reduxState, reduxDispatch)(Register);
