import React, { Component } from 'react';

class ArticleTeaser extends Component {
  render() {
    const { id, title, createdDate, handleTitleClick } = this.props;
    console.log(this.props)
    return (
      <div>
        <a href='#' onClick={ (event) => {
          event.preventDefault();
          this.props.handleTitleClick(this.props.id);
        }}>{ title }</a>
        <p>{ createdDate }</p>
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
