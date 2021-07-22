import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

function ArticleList(props) {
 
  let elements = props.articles.map((article, idx) => {
    return <ArticleTeaser key={ idx } id={ idx } createdDate = { article.create_date } title={ article.title } handleTitleClick= {props.handleTitleClick}/>
  })
  
  return (
    <div>{ elements } </div>
    );
}

export default ArticleList;
