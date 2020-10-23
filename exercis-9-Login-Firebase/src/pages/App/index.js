import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../Dashboard/index";
import Login from "../Login/index";
import register from "../Register/index";
import { Provider } from "react-redux";
import { store } from "../../config/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={register} />
      </Router>
    </Provider>
  );
}

export default App;
