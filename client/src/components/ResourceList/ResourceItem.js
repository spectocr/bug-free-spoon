import React from "react";

// import { Button } from "react-bootstrap";
// import Card from "react-bootstrap/Card";


import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ResourceItem(props) {
  return (
    // <Card border="primary" style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.description}</Card.Text>
    //     <Button variant="primary">Purchase</Button>
    //   </Card.Body>
    // </Card>


    <Card className="text-center">
  <Card.Header><h5>{props.title}</h5></Card.Header>
  <Card.Body>
  <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Title>{props.author}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

  );
}

export default ResourceItem;
