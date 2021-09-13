import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { imageUrl, children } = this.props;
    return (
      <div className="card">
        <div
          className="card-cover"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="card-body">{children}</div>
      </div>
    );
  }
}

export default Card;
