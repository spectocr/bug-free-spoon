import React from "react";
import ResourceItem from './ResourceItem';


function ResourceList(props) {
  return (
    <ul>
      {props.resources.map((resource) => (
        <ResourceItem
          key={resource.id}
          id={resource.id}
          // image={resource.volumeInfo.imageLinks.thumbnail}
          title={resource.volumeInfo.title}
          author={resource.volumeInfo.authors}
          description={resource.volumeInfo.description}
        />
      ))}
    </ul>
  );
}

export default ResourceList;