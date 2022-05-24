import React from "react";
import { FaUsers } from "react-icons/fa";
import { AiFillMoneyCollect } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div className="my-16">
      <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12 mx-auto text-center ">
        <h2 className="md:text-4xl text-2xl font-semibold mb-2 text-black">
          Business Statics
        </h2>
        <div className="h-1 w-24 rounded-lg bg-yellow-400 mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 pt-8 pb-16 px-8">
        <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
          <FaUsers className="text-yellow-600 text-6xl mx-auto mb-3"></FaUsers>
          <p className=" text-xl font-semibold">100+</p>
          <h4 className=" text-3xl text-black ">Customers</h4>
        </div>
        <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
          <AiFillMoneyCollect className="text-yellow-600 text-6xl mx-auto mb-3"></AiFillMoneyCollect>
          <p className=" text-xl font-semibold">1120M+</p>
          <h4 className=" text-3xl text-black ">Annual revenue</h4>
        </div>
        <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
          <MdReviews className="text-yellow-600 text-6xl mx-auto mb-3"></MdReviews>
          <p className=" text-xl font-semibold">33K+</p>
          <h4 className=" text-3xl text-black ">Reviews</h4>
        </div>
        <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
          <FaTools className="text-yellow-600 text-6xl mx-auto mb-3"></FaTools>
          <p className=" text-xl font-semibold">50+</p>
          <h4 className=" text-3xl text-black ">Tools</h4>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
