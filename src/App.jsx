import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <a href="https://google.com">Google</a>
      <br />
      <Link to="/page1">Go to Page1</Link>
      <br />
      <Link to="/page2">Go to Page2</Link>
      <Link to="/page3"> Go to Page3</Link>
    </div>
  );
}

export default App;
