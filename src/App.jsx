import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div style={{ backgroundColor: 'yellow', padding: '20px' }}>
      <h1>I AM SATYA</h1>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
      <br />
      <Link to="/page1">Go to Page1</Link>
      <br />
      <Link to="/page2">Go to Page2</Link>
      <br />
      <Link to="/page3">Go to Page3</Link>
      
      <br /><br />
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <br /><br />
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || 'Guest'}!</p>
    </div>
  );
}

export default App;
