import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

import { ListGroup } from 'react-bootstrap';

class ArticleList extends Component {

  getAllTeasers = (articles) => {
    return articles.map((article, idx) => {
      return (
        <ListGroup.Item key={idx} className="shadow p-3 m-2 bg-white rounded">
          <ArticleTeaser
            id={idx}
            createdDate={article.created_date}
            title={article.title}
            handleTitleClick={this.props.handleTitleClick}
            />
        </ListGroup.Item>
      )
    })
  }

  render() {
    return (
      <ListGroup>
        {
          this.getAllTeasers(this.props.articles)
        }
      </ListGroup>
    );
  }
}

export default ArticleList;
