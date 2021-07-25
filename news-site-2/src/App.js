import React, { Component } from 'react';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      navItems: navItems
    }
  }

  render() {
    const { navItems } = this.state

    return (
      <div>
        <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
        <Router>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/articles/:articleID' component={ArticlePage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
