import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/page2.css';

export default class Page2 extends Component {
  render() {
    return (
      <div className="page2">
        <h1>Welcome to Page 2</h1>
        <p>Today's topic is CSS in React.</p>
        <Link to="/page1">Go to Page 1</Link><br/>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}
