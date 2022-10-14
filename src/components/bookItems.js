import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItems extends React.Component{

    render(){
        return(
            <div>
                 <Card>
      <Card.Header>{this.props.book.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <img src={this.props.book.thumbnailUrl}></img>
          <footer className="blockquote-footer">
          
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
                {/* <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}
            </div>
        );
    }
}