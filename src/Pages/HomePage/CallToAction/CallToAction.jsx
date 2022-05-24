import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="lg:px-8">
      <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12 mx-auto text-center my-16">
        <h2 className="md:text-4xl text-2xl font-semibold mb-2 text-black mb-5">
          ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE
        </h2>
        <Link
          to="/"
          class="btn bg-yellow-600 border-0 hover:bg-stone-200 rounded-full px-8 uppercase duration-300 text-black"
        >
          Shop Now
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
};

export default CallToAction;
