import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import ProductItem from "../ProductItem";
import { QUERY_PRODUCTS } from "../../utils/queries";
import spinner from "../../assets/spinner.gif"

// import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';

import { idbPromise } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";

function ProductList() {
  // const [state, dispatch] = useStoreContext();
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if(data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
  
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    
    } else if (!loading) {
      
      idbPromise('products', 'get').then((products) => {
        
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(product => product.category._id === currentCategory);
  }

  return (

    <div className="my-2">
          <p>
      Welcome to Realtor-Rater! Here at WWE-HOMES finding your home isn't our only passion. Donate to our realtors charity of choice by selecting the realtor you've worked with in the past. Rate your realtor using the thumbs up or thumbs down button on their page!
    </p>
      {/* <h2>Our Agents </h2> */}
      {state.products.length ? (
        <div className="flex-row">
            {filterProducts().map(product => (
                <ProductItem
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any donations yet!</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default ProductList;
