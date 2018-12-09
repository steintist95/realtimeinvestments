import React, { Component } from 'react';
var PropTypes = require('prop-types');

export default class Home extends Component {
  static props = {
    isLoggedIn: PropTypes.bool
  };

  static defaultProps = {
    isLoggedIn: false
  }

  componentDidMount() {
    console.log("Loading home page with: " + this.props.isLoggedIn);
    if (!this.props.isLoggedIn) {
      window.location = "/";
    }
  };

  render() {
    return (
      <p>This is the home component</p>
    );
  }
}

