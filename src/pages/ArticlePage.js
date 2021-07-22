import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
  render() {
    const articleID = this.props.match.params.articleID;
    return (
      <div>
      <Article 
      title={News[articleID].title}
      created_date={News[articleID].created_date}
      byline={News[articleID].byline}
      image={News[articleID].multimedia[0].url}
      />
      </div>
    );
  }
}

export default ArticlePage;
