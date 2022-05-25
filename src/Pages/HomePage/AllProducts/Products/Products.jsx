import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading/Loading";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    (async () => {
      const { data } = await axios.get(url);
      setProducts(data);
      // console.log(data);
    })();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:px-8">
      <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12 mx-auto text-center lg:my-16 my-8">
        <h2 className="md:text-4xl text-3xl font-semibold mb-2 text-black">
          OUR PRODUCTS
        </h2>
        <div className="h-1 w-24 rounded-lg bg-yellow-600 mx-auto"></div>
        <p className="mt-3 lg:text-base text-sm">
          All best seller product are now available for you and your can buy
          this product from here any time any where so sop now.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7 lg:pt-8 pt-3 lg:pb-16 pb-10">
        {products.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
