import React from "react";

// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

function ResourceItem(props) {
  return (
    <li>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}

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
