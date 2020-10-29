import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Home,
  Contact,
  Shopping,
  LoginAuth,
  Register,
} from './pages/Index.js';

function App() {
  return (
    <Router>
      <Header className='app' />
      <Switch>
        <Route path='/Shopping' component={Shopping} />
        <Route path='/Contact' component={Contact} />
        <Route exact path='/' component={Home} />
        <Route path='/Login' component={LoginAuth} />
        <Route path='/Register' component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
