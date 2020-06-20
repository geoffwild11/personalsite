import React from 'react';
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <div>
      <div id="header">
        <h1>Geoffrey Wild</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Resume</a>
        </nav>
      </div>
      <Home />
    </div>
  );
}

export default App;
