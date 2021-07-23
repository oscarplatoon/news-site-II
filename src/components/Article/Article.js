import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Article extends Component {
  render() {
    const { title, created_date: createdDate, abstract, byline, image } = this.props;
    return (
      <Card bg='secondary' text='light' style={{ width: "42em" }}>
        { this.props.multimedia[0] && <Card.Img variant='top' alt={ title } src={ this.props.multimedia[0].url }/> }
        <Card.Body className=''>
          <Card.Title>{ title }</Card.Title>
          <Card.Subtitle>{ createdDate }</Card.Subtitle>
          { byline && <Card.Body>{ byline }</Card.Body> }
          <Card.Text>{ abstract }</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Article;
