// import React from "react";

// // import { Button } from "react-bootstrap";
// // import Card from "react-bootstrap/Card";


// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function ResourceItem(props) {
//   return (
//     // <Card border="primary" style={{ width: "18rem" }}>
//     //   <Card.Img variant="top" src="holder.js/100px180" />
//     //   <Card.Body>
//     //     <Card.Title>{props.title}</Card.Title>
//     //     <Card.Text>{props.description}</Card.Text>
//     //     <Button variant="primary">Purchase</Button>
//     //   </Card.Body>
//     // </Card>


//     <Card className="text-center">
//   <Card.Header><h5>{props.title}</h5></Card.Header>
//   <Card.Body>
//   <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Title>{props.author}</Card.Title>
//     <Card.Text>
//       {props.description}
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
//   <Card.Footer className="text-muted">2 days ago</Card.Footer>
// </Card>

//   );
// }

// export default ResourceItem;


import React from "react";
function ResourceItem(props) {
  return (
    <div className="bookCard px-1 py-1">
      <div className="container">
        <div><a>{props.title}</a></div>
        <img
          alt={props.author}
          src={require("../../assets/book-cover-placeholder.jpg")}
          className="bookName"
        />
        <div className="container">{props.author}</div>
      <p>{props.description}</p>
      <div></div>
      <button>Purchase</button>
      </div>
    </div>
  );
}
export default ResourceItem;