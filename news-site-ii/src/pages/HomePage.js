import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';

class HomePage extends Component {
  render() {
    return (
      <div>
        <ArticleList articles={News} handleTitleClick={(id) => this.props.history.push(`/articles/${id +1}`) } />
      </div>
    );
  }
}

export default HomePage;
