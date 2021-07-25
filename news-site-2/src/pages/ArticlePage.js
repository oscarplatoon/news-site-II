import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
  render() {
    let article = News[this.props.match.params.articleID - 1]
    console.log(article)
    return (
      <div>
        <Article {...article} />
      </div>
    );
  }
}

export default ArticlePage;
