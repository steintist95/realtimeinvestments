import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import login_helper from './Login_Helper';
import Login from './Login';
import Home from './Home';
var PropTypes = require('prop-types');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: login_helper.isLoggedIn()
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => (<Login isLoggedIn={this.state.isLoggedIn} handleSignIn={login_helper.handleSignIn}/>)}/>
          <Route exact path="/home" render={() => (<Home isLoggedIn={this.state.isLoggedIn}/>)}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
