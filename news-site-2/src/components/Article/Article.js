import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

// ---- CLASS BASED COMPONENT
// class Article extends Component {
//   render() {
//     return (
//       <div>
//         <Card style={{ width: '24rem' }} className="m-5">
//           {this.props.multimedia[0] && <Card.Img variant="top" src={this.props.multimedia[0].url} alt={this.props.title} />}
//           <Card.Body>
//             <Card.Title>{this.props.title}</Card.Title>
//             <Card.Text>{this.props.abstract}</Card.Text>
//             <p>{moment(this.props.created_date).format("MMMM DD, YYYY hh:mm")}</p>
//             {this.props.byline && <Card.Text>{this.props.byline}</Card.Text>}
//           </Card.Body>
//         </Card>
//       </div>
//     )
//   }
// }

// ---- FUNCTIONAL COMPONENT
const Article = (props) => {
  const { multimedia, title, abstract, created_date, byline } = props;
  return (
    <div>
      <Card style={{ width: '24rem' }} className="m-5">
        {multimedia[0] && <Card.Img variant="top" src={multimedia[0].url} alt={title} />}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{abstract}</Card.Text>
          <p>{moment(created_date).format("MMMM DD, YYYY hh:mm")}</p>
          {byline && <Card.Text>{byline}</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Article;
