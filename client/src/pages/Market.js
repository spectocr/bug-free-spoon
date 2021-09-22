import { useEffect, useState } from "react";
import React from "react";

// import MarketList from "../components/MarketList/MarketList";

function Market() {
  const [loadedMarkets, setLoadedMarkets] = useState([]);

  useEffect(() => {
    const searchGoogleBooks = async () => {
      return fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:home_buying`
      );
    };

    const HandleMarket = async () => {
      // event.preventDefault();
      try {
        const response = await searchGoogleBooks();
        const { items } = await response.json();
        console.log(items);

        setLoadedMarkets(items);
      } catch (err) {
        console.log(err);
      }
    };
    HandleMarket();

    return () => setLoadedMarkets(loadedMarkets);
  }, []);

  // console.log(searchGoogleBooks);

  // console.log(loadedMarkets);
  return (
    <section>
      {/* <MarketList Markets={loadedMarkets} /> */}
    </section>
  );
}

export default Market;