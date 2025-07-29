import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>I am Satya</h1>
        <Link to="/page2">Go to Page2</Link>
        <br />
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}
