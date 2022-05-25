import React from "react";
import brand1 from "../../../images/brand1.png";

const BrandLogo = () => {
  return (
    <div className="lg:px-8">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5">
        {/* <div className="bg-[url('https://i.ibb.co/W2m289p/deal-bg.webp')] bg-cover lg:h-[40vh] h-[60vh]"></div> */}
        <div>
          <img src={brand1} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default BrandLogo;
