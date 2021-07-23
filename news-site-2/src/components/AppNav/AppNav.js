import React, { Component } from 'react';

// ---- CLASS BASED COMPONENT
// class AppNav extends Component {
//   render() {
//     const { navItems } = this.props;

//     const createNavItems = () => {
//       return navItems.map((navItem, idx) => {
//         return <a key={idx} href={() => console.log(navItem.value)}>{ navItem.label }</a>

//       })
//     }

//     return (
//       <nav>
//       {
//         createNavItems()
//       }
//       </nav>
//     )
//   }
// }

// ---- FUNCTIONAL COMPONENT
const AppNav = (props) => {
  const { navItems } = props;

  const createNavItems = () => {
    return navItems.map((navItem, idx) => {
      return <a key={idx} href='#'>{ navItem.label }</a>

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

export default AppNav;
