import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Homepage} />
    </Router>
  );
}

export default App;