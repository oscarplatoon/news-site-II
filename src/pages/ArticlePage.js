import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
  render() {
    console.log(this.props.match.params.articleID-1)
    //This correctly grabs the news article by correcting back to the 0 based indexing of the JSON.
    let article = News[this.props.match.params.articleID-1] 
    return (
      <div> <Article {...article} /> </div>
    );
  }
}

export default ArticlePage;
