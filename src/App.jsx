import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from './assets/image1.png';   // Honda
import img2 from './assets/image2.png';   // Toyota
import img3 from './assets/image3.png';   // VW
import img4 from './assets/image4.png';   // Audi
import img5 from './assets/image5.png';   // BMW
import img6 from './assets/image6.png';   // Maruti
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  // update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // data for your cards
  const cards = [
    { img: img1, label: 'Go To Page1', to: '/page1' },
    { img: img2, label: 'Go To Page2', to: '/page2' },
    { img: img3, label: 'Go To Page3', to: '/page3' },
    { img: img4, label: 'Go To Page4', to: '/page4' },
    { img: img5, label: 'Go To Page5', to: '/page5' },
    { img: img6, label: 'Go To Page6', to: '/page6' },
  ];

  return (
    <div className="app">
      { }
      <header className="app-header">
        <div className="header-title">Welcome to Frontend Class in KLU  <h1>2400031153</h1></div>
        <div className="header-time">
          {time.toLocaleDateString()}&nbsp;&nbsp; {time.toLocaleTimeString()}
        </div>
      </header>

      {/* Subtitle */}
      <div className="app-subtitle">
        HTML-CSS-React Topic Covered Till Now
      </div>

      {/* Card grid */}
      <main className="card-grid">
        {cards.map((c, i) => (
          <div key={i} className="card">
            <img src={c.img} alt={c.label} />
            <Link to={c.to} className="card-link">{c.label}</Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
