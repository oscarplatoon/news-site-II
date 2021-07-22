import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';

class ArticleList extends Component {

  getArticles = (articles) => {
    return (articles.map((article, index) => {
      return (
      <div key={index}>
        <ArticleTeaser 
        id={index} 
        createdDate={article.createdDate}
        {...article} 
        handleTitleClick={ this.props.handleTitleClick}>
        </ArticleTeaser>
      </div>
    )}))
  }
  
  
  
  render() {
    
    return (
            
      <div>
        {this.getArticles(this.props.articles)} 
      </div>
    )
  }
}

export default ArticleList;
