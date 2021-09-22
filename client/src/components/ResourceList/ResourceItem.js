import React from "react";


// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

function ResourceItem(props) {
  return (
   

    
    <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Purchase</a>
    {/* <Button variant="primary">Primary</Button> */}
  </div>
</div>
    
    
  );
}

export default ResourceItem;
