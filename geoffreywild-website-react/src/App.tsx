import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  return (
    <HashRouter>
      <div id="header">
        <h1>Geoffrey Wild</h1>
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
    </HashRouter>
  );
}

export default App;
