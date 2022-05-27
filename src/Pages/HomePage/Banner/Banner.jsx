import React from "react";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/jLsYZ0f/banner.png')] bg-cover">
      <div className="md:h-[90vh] h-[80vh] flex flex-col justify-center items-start">
        <Fade right>
          <div className="pl-10">
            <h4 className="primary-color lg:text-3xl md:text-2xl text-xl ">
              NEW TECHNOLOGY & BUILD
            </h4>
            <h1 className="md:text-7xl text-2xl font-bold primary-color md:my-6 my-2">
              WHEELS & TIRES <br /> COLLECTIONS
            </h1>
            <button className="btn glass">Shop NOW</button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
