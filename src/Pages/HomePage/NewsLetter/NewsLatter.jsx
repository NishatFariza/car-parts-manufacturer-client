import React from "react";

const NewsLatter = () => {
  return (
    <div className="lg:mt-32 mt-10 mb-20 ">
      <div className="bg-[url('https://i.ibb.co/Cwdn87T/newsletter-bg.webp')] bg-cover md:h-[70vh] h-[80vh] lg:w-11/12 mx-auto rounded  flex justify-center items-center">
        <div className="lg:w-8/12 w-10/12 mx-auto text-center">
          <div className="text-center">
            <h4 className="primary-color lg:text-2xl md:text-xl text-xl lg:mb-3 mb-0">
              SPECIAL <span className="text-yellow-400">OFFER</span> FOR
              SUBSCRIPTION
            </h4>
            <h3 className="primary-color lg:text-3xl md:text-2xl text-xl ">
              GET INSTANT DISCOUNT FOR MEMBERSHIP
            </h3>
            <p className="mb-6 primary-color lg:w-6/12 w-auto mx-auto mt-4">
              Subscribe our newsletter and all latest news of our latest
              product, promotion and offers
            </p>
            <div>
              <input
                type="text"
                placeholder="Enter Your Email"
                class="input input-bordered w-full max-w-xs rounded-full"
              />
              <input
                className="btn lg:w-2/12 w-full max-w-xs rounded-full -ml-28"
                value="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
