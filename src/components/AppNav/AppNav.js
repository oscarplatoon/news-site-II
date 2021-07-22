import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap';


class AppNav extends Component {

  renderNavItems = (navItems) => {
    let elements = navItems.map((navItem, index) => {
      return (
        <Nav.Link href="#" key={ index } onClick={ () => this.handleNavClick(navItem.value)}  >
          | {navItem.label} |
        </Nav.Link>
      )
    })
    return (
      <Nav>
        { elements }
      </Nav>
    )
  }

  render() {
    const { navItems, handleNavClick } = this.props;

    return (
      <Navbar bg='dark' variant='dark'>
        { this.renderNavItems(navItems) }
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
