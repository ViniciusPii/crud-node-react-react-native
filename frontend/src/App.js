import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './header/Header';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
      </div>
    </Router>
  );
}

export default App;
