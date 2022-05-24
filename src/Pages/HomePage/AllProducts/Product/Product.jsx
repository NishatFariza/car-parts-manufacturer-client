import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { name, img, price, description, minimumOrder, availableQuantity } =
    product;
  return (
    <div className="w-11/12 sm:w-auto mx-auto border rounded-2xl box-shadow duration-500 cursor-pointer">
      <div className="rounded-2xl">
        <img className="rounded-2xl" src={img} alt="" />
      </div>
      <div className="sm:py-8 py-4 px-4">
        <h3 className="text-2xl font-semibold hover:text-yellow-400 duration-500 ">
          {name}
        </h3>
        <p className="text-slate-800 mt-3">
          <strong>availableQuantity: </strong>
          {availableQuantity}
        </p>
        <p className="text-slate-800">
          <strong>minimumOrder: </strong>
          {minimumOrder}
        </p>
        <p className="text-slate-800 mb-2">
          <strong>Price: </strong>
          {price}
        </p>
        <p title={description} className="text-stone-600">
          {description.length >= 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
        <button
          onClick={() => navigate(`/inventory/${product._id}`)}
          className="border border-yellow-400 px-6 py-2 hover:bg-yellow-400 hover:text-black duration-500 mt-4 font-semibold text-stone-600"
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Product;
