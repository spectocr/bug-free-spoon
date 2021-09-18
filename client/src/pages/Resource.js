import { useEffect, useState } from "react";
import React from "react";

import ResourceList from "../components/ResourceList/ResourceList";

function Resource() {
  
  const [loadedResources, setLoadedResources] = useState([]);

  useEffect(() => {
    return () => setLoadedResources(loadedResources);
  },[]);

  const searchGoogleBooks = () => {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:real_estate`
    );
  };

  // console.log(searchGoogleBooks);

  const HandleResource = async (event) => {
    // event.preventDefault();
    try {

      
      const response = await searchGoogleBooks();
      const { items } = await response.json();
      console.log(items);

      setLoadedResources(items);
    } catch (err) {
      console.log(err);
    }
  };
  HandleResource();
  // console.log(loadedResources);
  return (
    <section>
      <ResourceList resources={loadedResources} />
    </section>
  );
}

export default Resource;

// function Resource() {
//   const [loadedResources, setLoadedResources] = useState([]);

//   useEffect(() => {
//     fetch("https://www.googleapis.com/books/v1/volumes?q=subject:real_estate")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         const resources = [];

//         // for (const items in data) {
//         //     const resource = {
//         //       id: items,
//         //       ...data[items]
//         //     };

//         resources.push(data.items);
//         // }
//         console.log(resources);
//         setLoadedResources(resources);
        
//       });
//   }, []);

//   return (
//     <section>
//       <ResourceList resources={loadedResources} />
//     </section>
//   );
// }

// export default Resource;