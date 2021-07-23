import React, { Component } from 'react';
import moment from 'moment';

// ---- CLASS BASED COMPONENT
// class ArticleTeaser extends Component {
//   render() {
//     const { id, title, createdDate, handleTitleClick } = this.props;

//     return (
//       <div>
//         <a href="#" onClick={(event) => {
//           event.preventDefault();
//           handleTitleClick(id);
//         }}>{ title }</a>
//         <p>{ moment(createdDate).format('MMMM DD, YYYY') }</p>
//       </div>
//     )
//   }
// }

// ---- FUNCTIONAL COMPONENT
const ArticleTeaser = ({ id, title, createdDate, handleTitleClick }) => {
  return (
    <div>
      <a onClick={(event) => {
        event.preventDefault();
        handleTitleClick(id);
      }}>{title}</a>
      <p>{moment(createdDate).format('MMMM DD, YYYY')}</p>
    </div>
  );
}

export default ArticleTeaser;


// Functional solution:
