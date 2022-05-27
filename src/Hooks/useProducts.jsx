import axios from "axios";
import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://salty-bayou-55799.herokuapp.com/products`;
    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
      // console.log(data);
    })();
  }, []);
  return [products];
};

export default useProducts;
