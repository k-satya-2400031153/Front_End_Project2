import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/page2.css'; 

export default class Page2 extends Component {
  render() {
    return (
      <div className="Main1">
        <h1 style={{ textAlign: "center" }}>Welcome to Page2.jsx</h1>
        <h1 id='topic'>Today's topic is css in react</h1>
        <Link className="duo" to="/page1">Go to Page1</Link>
        <br />
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
}