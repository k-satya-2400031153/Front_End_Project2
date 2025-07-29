import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/page3.css'
export default class page3 extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
        header
        </div>
        <div className='body'>
        body
        </div>
        <div className='footer'>
footer
        </div>
        <Link className="duo" to="/page1">Go to Page1</Link>
                <br />
                <Link to="/">Go to Home</Link>
      </div>
    )
  }
}
