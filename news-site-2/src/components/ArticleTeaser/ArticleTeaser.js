import React, { Component } from 'react';
import moment from 'moment';

class ArticleTeaser extends Component {
  render() {
    const { id, title, createdDate, handleTitleClick } = this.props;


    return (
      <div>
        <a href="#" onClick={(event) => {
          event.preventDefault();
          handleTitleClick(id);
        }}>{ title }</a>
        <p>{ moment(createdDate).format('MMMM DD, YYYY') }</p>
      </div>
    )
  }
}

export default ArticleTeaser;


// Functional solution:
// function ArticleTeaser({ id, title, created_date: createdDate, handleTitleClick }) {
//   return (
//     <div>
//       <a onClick={ () => handleTitleClick(id) }>{ title }</a>
//       <p>{ createdDate }</p>
//     </div>
//   );
// }
