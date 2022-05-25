import React from "react";

const MyPortfolioBanner = () => {
  return (
    <div className="bg-black lg:h-[80vh] h-[60vh] flex justify-center items-center">
      <div className="text-center">
        <h2 className="lg:text-5xl text-3xl text-white text-center">
          Hello, I'm <span className="text-yellow-600 ">Nishat Fariza</span>
        </h2>
        <p className="text-white lg:my-4 my-2 text-center lg:text-xl text-sm">
          I'm a Front-End-Developer
        </p>
        <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 hover:text-black duration-500 lg:mt-4  text-white  transition w-40 mx-auto text-center rounded cursor-pointer">
          Explore Details
        </button>
      </div>
    </div>
  );
};

export default MyPortfolioBanner;
