import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';

// ---- CLASS BASED COMPONENT
// class HomePage extends Component {
//   render() {
//     console.log(this.props.history)
//     return (
//       <div>
//         <ArticleList articles={News} handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID+1}`) } />
//       </div>
//     );
//   }
// }

// ---- FUNCTIONAL COMPONENT
const HomePage = (props) => {
  return (
    <div>
      <ArticleList articles={News} handleTitleClick={(articleID) => props.history.push(`/articles/${articleID + 1}`)} />
    </div>
  );
}

export default HomePage;
