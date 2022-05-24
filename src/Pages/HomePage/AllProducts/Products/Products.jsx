import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12 mx-auto text-center my-8">
        <h2 className="md:text-4xl text-2xl font-semibold mb-2">
          OUR PRODUCTS
        </h2>
        <div className="h-1 w-24 rounded-lg bg-yellow-400 mx-auto"></div>
        <p className="mt-3">
          All best seller product are now available for you and your can buy
          this product from here any time any where so sop now
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
        {products.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
