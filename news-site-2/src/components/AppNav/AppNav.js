import React, { Component } from 'react';

class AppNav extends Component {

  render() {
    const { navItems, handleNavClick } = this.props;

    const createNavItems = () => {
      return navItems.map((navItem, idx) => {
        return <a key={idx} href="#" onClick={ () => handleNavClick(navItem.value)}>{navItem.label}</a>
      })
    }


    return (
      <nav>
        {
          createNavItems()
        }
      </nav>
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
