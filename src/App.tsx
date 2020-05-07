import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss';

import Homepage from './pages/Homepage'
import Postpage from './pages/Postpage'
import Contactpage from './pages/Contactpage'
import AboutPage from './pages/Aboutpage'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Homepage} />
      <Route path='/blog/posts/:slug' component={Postpage} />
      <Route path='/contact' component={Contactpage} />
      <Route path='/about' component={AboutPage} />
    </Router>
  );
}

export default App;