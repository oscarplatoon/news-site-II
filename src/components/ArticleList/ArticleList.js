import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import { ListGroup } from 'react-bootstrap'

function ArticleList(props) {
 
  let elements = props.articles.map((article, idx) => {
    return (
      <div>
        <ListGroup className='shadow p-3 mb-3'>
          <ListGroup.Item>
            <ArticleTeaser key={ idx } id={ idx } createdDate = { article.create_date } title={ article.title } handleTitleClick= {props.handleTitleClick}/>
          </ListGroup.Item>
        </ListGroup>
      </div>
    )
  })
  
  return (
    <div>{ elements } </div>
    );
}

export default ArticleList;
