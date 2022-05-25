import React from "react";

const MyPortfolio = () => {
  return (
    <div className="bg-black lg:h-[80vh] h-[60vh] flex justify-center items-center">
      <div className="text-center">
        <h2 className="lg:text-5xl text-2xl text-white text-center">
          Hello, I'm <span className="text-yellow-600 ">Nishat Fariza</span>
        </h2>
        <p className="text-white my-4 text-center text-xl">
          I'm a Programmer, I'm a Front-End-Developer
        </p>
        <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 hover:text-black duration-500 mt-4  text-white  transition w-40 mx-auto text-center rounded cursor-pointer">
          Explore Details
        </button>
      </div>
    </div>
  );
};

export default MyPortfolio;
