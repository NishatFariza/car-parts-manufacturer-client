import React from "react";
import { FaUsers } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 pt-8 pb-16 px-8">
      <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
        <FaUsers className="text-yellow-600 text-6xl mx-auto mb-3"></FaUsers>
        <p className=" text-xl font-semibold">100+</p>
        <h4 className=" text-4xl ">Customers</h4>
      </div>
      <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
        <FaUsers className="text-yellow-600 text-6xl mx-auto mb-3"></FaUsers>
        <p className=" text-xl font-semibold">1120M+</p>
        <h4 className=" text-4xl ">Annual revenue</h4>
      </div>
      <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
        <FaUsers className="text-yellow-600 text-6xl mx-auto mb-3"></FaUsers>
        <p className=" text-xl font-semibold">100+ </p>
        <h4 className=" text-4xl ">Customers</h4>
      </div>
      <div className="lg:py-8 lg:px-16 py-10 px-6 border rounded bg-stone-100 text-center">
        <FaUsers className="text-yellow-600 text-6xl mx-auto mb-3"></FaUsers>
        <p className=" text-xl font-semibold">100+ </p>
        <h4 className=" text-4xl ">Customers</h4>
      </div>
    </div>
  );
};

export default BusinessSummary;
