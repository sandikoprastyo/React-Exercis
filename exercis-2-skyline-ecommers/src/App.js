import React from "react";
import Router from "./components/router";
import "./styles/main.css";
//import firebase from "./config/firebase/index.js";
import { store } from "./config/redux/";
import { Provider } from "react-redux";

//console.log(firebase);
function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        <Router />
      </header>
    </Provider>
  );
}

export default App;
