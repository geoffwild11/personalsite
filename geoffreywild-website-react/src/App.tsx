import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';

function App() {
  return (
    <HashRouter>
      <div id="divMainContent">
        <div className="innerContent">
        <div id="header">
          <h1>Geoffrey Wild</h1>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/about">About Me</NavLink>
          </nav>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
      </div>
      <footer>Copyright 2019-2020, Geoff Wild</footer>
    </div>
    </HashRouter>
  );
}

export default App;
