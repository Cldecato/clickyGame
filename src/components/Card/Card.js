import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card click-item">
    <div className="img-container mx-auto" onClick={() => props.handleClick(props.id)}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;