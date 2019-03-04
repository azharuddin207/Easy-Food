import React, { Component } from "react";
import { list } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import { unstyle } from "ansi-colors";
class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div />;
  }

  renderComments(comments) {
    if (comments != null) {
      const list = comments.map(comment => {
        return (
          <div>
            <ul className="list-unstyled" key="comment.id">
              <li>{comment.comment}</li>
              <li className="list-inline-item">-- {comment.author} , </li>
              <li className="list-inline-item"> {comment.date}</li>
            </ul>
          </div>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <div>{list}</div>
        </div>
      );
    } else return <div />;
  }

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <div>{this.renderDish(this.props.selectedDish)}</div>
          </div>
          <div className="col-12 col-md-5 m-1">
            <div> {this.renderComments(this.props.selectedDish.comments)}</div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default Dishdetail;

/*
import React from "react";
import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle> {dish.name} </CardTitle>
          <CardText> {dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      const element = comments.map(comment => {
        return (
          <div key={comment.id}>
            <dl className="row">
              <dd className="col-sm-12">{comment.comment}</dd>
              <dd className="col-sm-12">
                {" "}
                -- {comment.author}, {comment.date}
              </dd>
            </dl>
          </div>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          {element}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    if (this.props.selectedDish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.selectedDish.comments)}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Dishdetail;
*/
