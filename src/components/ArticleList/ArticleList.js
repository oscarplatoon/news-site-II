import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import { ListGroup } from 'react-bootstrap'

class ArticleList extends Component {
  getAllTeasers = (articles) => {
    return articles.map((article, idx) => {
      return <ArticleTeaser key={idx} id={idx} title={ article.title } created_date={article.created_date} handleTitleClick={this.props.handleTitleClick} />
    })
  }

  render() {
    return (
      <div>
        { this.getAllTeasers(this.props.articles) } 
      </div>
    );
  }
}

export default ArticleList;
