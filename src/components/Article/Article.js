import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Article extends Component {
  render() {
    const { title, created_date: createdDate, abstract, byline, image } = this.props;
    return (
      <Container>
        <div className='text-light'>
          <h1>{ title }</h1>
          <p>{ createdDate }</p>
          { byline && <h2>{ byline }</h2> }
          { this.props.multimedia[0] && <img alt={ title } src={ this.props.multimedia[0].url }/> }
          <p>{ abstract }</p>
        </div>
      </Container>
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
