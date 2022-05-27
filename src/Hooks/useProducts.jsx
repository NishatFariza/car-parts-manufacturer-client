import axios from "axios";
import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
      // console.log(data);
    })();
  }, []);
  return [products];
};

export default useProducts;
