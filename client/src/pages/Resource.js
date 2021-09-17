import { useEffect, useState } from "react";
import React from "react";

import ResourceList from "../components/ResourceList/ResourceList";

function Resource() {
  const [loadedResources, setLoadedResources] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:real_estate")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const resources = [];

        // for (const items in data) {
        //     const resource = {
        //       id: items,
        //       ...data[items]
        //     };

        resources.push(data.items);
        // }
        console.log(resources);
        setLoadedResources(resources);
        
      });
  }, []);

  return (
    <section>
      <ResourceList resources={loadedResources} />
    </section>
  );
}

export default Resource;
