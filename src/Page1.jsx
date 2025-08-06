import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>Page 1</h1>
        <nav>
          <Link to="/">Home</Link><br/>
          <Link to="/page2">Page 2</Link><br/>
          <Link to="/page3">Page 3</Link><br/>
          <Link to="/page4">Page 4</Link><br/>
          <Link to="/page5">Page 5</Link><br/>
          <Link to="/page6">Page 6</Link><br/>
        </nav>
      </div>
    );
  }
}
