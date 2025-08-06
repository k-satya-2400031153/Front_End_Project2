/* Updated Page5.jsx */
import React, { Component, createRef } from 'react';
import './css/page5.css';

export default class Page5 extends Component {
  constructor() {
    super();
    this.state = { index: 0, slideCount: 3 };
    this.autoSlide = this.autoSlide.bind(this);
    this.slideRef = createRef();
  }

  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  autoSlide() {
    const nextIndex = (this.state.index + 1) % this.state.slideCount;
    this.setState({ index: nextIndex });
    if (this.slideRef.current) {
      this.slideRef.current.style.transform = `translateX(-${nextIndex * 100}%)`;
    }
  }

  render() {
    // Derive the component/page name dynamically
    const pageName = this.constructor.name;

    return (
      <div className="page5-container">
        <header>
          <div className="slider">
            <div className="slides" ref={this.slideRef}>
              <div className="slide s1"></div>
              <div className="slide s2"></div>
              <div className="slide s3"></div>
            </div>
          </div>
        </header>

        <section>
          {/* Add your page-specific content here */}
        </section>

        <footer>
          {pageName} &mdash; Copyright © SATYA 2025
        </footer>
      </div>
    );
  }
}