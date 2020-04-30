import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Postpage from './pages/Postpage'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Homepage} />
      <Route path='/blog/posts/:slug' component={Postpage} />
    </Router>
  );
}

export default App;