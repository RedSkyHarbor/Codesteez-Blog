import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.scss';
import './fonts/Playfair_Display/PlayfairDisplay.ttf'

import HomePage from './pages/Homepage'
import PostPage from './pages/Postpage'
import ContactPage from './pages/Contactpage'
import AboutPage from './pages/Aboutpage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/blog/posts/:slug' component={PostPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/404' component={NotFoundPage} />
      <Redirect to='/404' />
    </Router>
  );
}

export default App;