import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  
  // Mapping
  getAllTitles = (articles, handleTitleClick) => {
    return articles.map((article, idx) => {
      return (
        <ArticleTeaser 
          id={idx + 1}
          title={article.title}
          createdDate={article.created_date}
          handleTitleClick={handleTitleClick}
        />
      )}
    )
  }

  render() {
    const { articles, handleTitleClick } = this.props
    console.log(articles)
    return (
      <div>
        <h1>Home Page</h1>
        <h3>{ this.getAllTitles(articles, handleTitleClick) }</h3>
      </div>
    );
  }
}

export default ArticleList;
