import React from "react";
import brand1 from "../../../images/brand1.png";
import brand2 from "../../../images/brand2.png";
import brand3 from "../../../images/brand3.png";
import brand4 from "../../../images/brand4.png";
import brand5 from "../../../images/brand5.png";

const BrandLogo = () => {
  return (
    <div className="lg:px-8 lg:py-10 ">
      <div className="flex lg:flex-row flex-col justify-around items-center">
        {/* <div className="bg-[url('https://i.ibb.co/W2m289p/deal-bg.webp')] bg-cover lg:h-[40vh] h-[60vh]"></div> */}
        <div>
          <img className=" lg:mt-auto mt-0" src={brand1} alt="" />
        </div>
        <div>
          <img className=" lg:mt-0 mt-8" src={brand2} alt="" />
        </div>
        <div>
          <img className=" lg:mt-0 mt-8" src={brand3} alt="" />
        </div>
        <div>
          <img className=" lg:mt-0 mt-8" src={brand4} alt="" />
        </div>
        <div>
          <img className=" lg:mt-0 mt-8" src={brand5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
