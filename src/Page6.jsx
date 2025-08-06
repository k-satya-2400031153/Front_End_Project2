import React, { Component } from 'react';
import img1 from './assets/image1.png';
import img2 from './assets/image2.png';
import img3 from './assets/image3.png';
import img4 from './assets/image4.png';
import img5 from './assets/image5.png';
// import img6 from './assets/image6.png';
import './css/page6.css';

export default class Page6 extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to Page 6!',
      timestamp: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timestamp: new Date().toLocaleString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const images = [img1, img2, img3, img4, img5];

    return (
      <div className="page6-container">
        <header className="page6-header">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            architecto, quidem cumque esse repudiandae fugit numquam quam eligendi
            velit, laborum at provident laudantium. Quo facilis sint illum saepe
            nostrum sed?
          </h1>
        </header>

        <section className="page6-content">
          <p>Current time: {this.state.timestamp}</p>
          <div className="image-grid">
            {images.map((src, idx) => (
              <div key={idx} className="card">
                <img src={src} alt={`Illustration ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <footer className="page6-footer">
          Page6 — Copyright © SATYA 2025
        </footer>
      </div>
    );
  }
}