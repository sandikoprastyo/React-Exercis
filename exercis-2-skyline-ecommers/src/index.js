import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import firebase from "./config/firebase/index.js";
import { store } from './config/redux/';
import { Provider } from 'react-redux';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
