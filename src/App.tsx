import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/blog/posts/:slug' component={PostPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/about' component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;