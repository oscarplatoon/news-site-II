import React, { Component } from 'react';

class Article extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <p>{ this.props.created_date }</p>
        { this.props.byline && <h2>{ this.props.byline }</h2> }
        { this.props.multimedia[0] && <img src={ this.props.multimedia[0].url } alt={ this.props.title }/> }
        <p>{ this.props.abstract }</p>
      </div>
    )
  }
}

export default Article;


// Functional solution:
// function Article({ title, created_date: createdDate, abstract, byline, image }) {
//   return (
//     <div>
//       <h1>{ title }</h1>
//       <p>{ createdDate }</p>
//       { byline && <h2>{byline}</h2> }
//       { image && <img src={image} /> }
//       <p>{ abstract }</p>
//     </div>
//   );
// }
