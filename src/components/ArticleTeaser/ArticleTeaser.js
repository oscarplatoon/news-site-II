import React, { Component } from "react";


class ArticleTeaser extends Component {
  render() {
    const { id, title, creaded_date: createdDate, handleTitleClick} = this.props
    // handleClick(event) {
    //   event.preventDefault()
    //   handleTitleClick(id +1) // This keeps articles/0 from happening.
    // }
    return (
        <div>
          <div className='link'>
            <a href='#' onClick={ (event) => {
              handleTitleClick(id+1);
              event.preventDefault();
              } 
            }>
              { title }
            </a>
            <p>
              { createdDate }
            </p>
          </div>
        </div>
      )
  
    }
  }

export default ArticleTeaser;

// The `ArticleTeaser`
// component should:
//   1. Display the `title`
// inside of an `<a>`
// tag.
// 2. When the `title`
// `<a>`
// tag is clicked, it should call `this.props.handleTitleClick(this.props.id);`.Will arrow functions be useful here ?
//   3. Display the `created_date` in a `<p>`
// tag.
