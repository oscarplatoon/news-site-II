import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class AppNav extends Component {
  render() {
    const { navItems, handleNavClick } = this.props;

    return (
      <Navbar className='navbar-dark'>
        {navItems.map((navItem, index) => {
          <a href="#" key={ index } onClick={ () => handleNavClick(navItem.value)} >
           | {navItem.label} |
          </a>
        }
        )}
      </Navbar>
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <nav>
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick(navItem.value)} >
//           {navItem.label} |
//         </a>
//       )}
//     </nav>
//   );
// }
