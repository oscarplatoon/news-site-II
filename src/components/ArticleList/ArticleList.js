import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import News from '../../data/news.json'

class ArticleList extends Component {
  render() {
    return (
      <div>
          {News.map((article, index) => {
          return (<ArticleTeaser
          id={index+1}
          title={article.title}
          created_date={article.created_date}
          handleTitleClick={ this.props.handleTitleClick } 
          /> )})}
      </div>
    );
  }
}

export default ArticleList;
