import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss';
import './fonts/Playfair_Display/PlayfairDisplay.ttf'

import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/blog/posts/:slug' component={PostPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/about' component={AboutPage} />
    </Router>
  );
}

export default App;