import React from "react";


function ResourceItem(props) {
  return (
    <li>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.author}</address>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default ResourceItem;