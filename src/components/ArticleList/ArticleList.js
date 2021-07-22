import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import { ListGroup, Container } from 'react-bootstrap'

class ArticleList extends Component {
  getAllTeasers = (articles) => {
    return articles.map((article, idx) => {
      return (
        <ListGroup.Item as='a' key={idx} action variant='dark' className='shadow p-3 m-2 rounded'>
          <ArticleTeaser id={idx} title={ article.title } created_date={article.created_date} handleTitleClick={this.props.handleTitleClick} />
        </ListGroup.Item>
      )
    })
  }

  render() {
    return (
      <Container>
        <ListGroup>
          { 
            this.getAllTeasers(this.props.articles)
          } 
        </ListGroup>
      </Container>
    );
  }
}

export default ArticleList;
