import React, { Component, useState } from 'react';
import navItems from './data/navItems.json';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// ---- CLASS BASED COMPONENT
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       navItems: navItems
//     }
//   }

//   render() {
//     const { navItems } = this.state

//     return (
//       <div>
//       <Router>
//         <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
//           <div>
//             <Route exact path='/' component={HomePage} />
//             <Route exact path='/articles/:articleID' component={ArticlePage}/>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

// ---- FUNCTIONAL COMPONENT
const App = () => {

  return (
    <div>
      <Router>
        <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/articles/:articleID' component={ArticlePage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
