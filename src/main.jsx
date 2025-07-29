import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './page3.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
