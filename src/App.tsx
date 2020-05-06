import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Postpage from './pages/Postpage'
import Contactpage from './pages/Contactpage'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Homepage} />
      <Route path='/blog/posts/:slug' component={Postpage} />
      <Route path='/contact' component={Contactpage} />
    </Router>
  );
}

export default App;