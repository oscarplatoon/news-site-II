import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

class Article extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '24rem' }} className="m-5">
          {this.props.multimedia[0] && <Card.Img variant="top" src={this.props.multimedia[0].url} alt={this.props.title} />}
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.abstract}</Card.Text>
            <p>{moment(this.props.created_date).format("MMMM DD, YYYY hh:mm")}</p>
            {this.props.byline && <Card.Text>{this.props.byline}</Card.Text>}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Article;
