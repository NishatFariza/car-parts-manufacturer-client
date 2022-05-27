import React from "react";
import Zoom from "react-reveal/Zoom";

const NewsLatter = () => {
  return (
    <div className="lg:mt-32 mt-10 mb-20 ">
      <div className="bg-[url('https://i.ibb.co/Cwdn87T/newsletter-bg.webp')] bg-cover md:h-[70vh] h-[80vh] w-11/12 mx-auto rounded  flex justify-center items-center">
        <Zoom>
          <div className="lg:w-8/12 w-10/12 mx-auto text-center">
            <div className="text-center">
              <h4 className="primary-color lg:text-2xl md:text-xl text-sm lg:mb-3 mb-1">
                SPECIAL <span className="text-yellow-600">OFFER</span> FOR
                SUBSCRIPTION
              </h4>
              <h3 className="primary-color lg:text-4xl md:text-2xl text-xl text-center ">
                GET INSTANT DISCOUNT FOR MEMBERSHIP
              </h3>
              <p className="mb-6 primary-color lg:text-base text-xs lg:w-6/12 w-auto mx-auto mt-4">
                Subscribe our newsletter and all latest news of our latest
                product, promotion and offers
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-10/12 max-w-xs rounded-full"
                />
                <input
                  className="btn lg:w-2/12 w-5/12 max-w-xs rounded-full lg:-ml-28 -ml-20"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default NewsLatter;
