import React from "react";

const NewsLatter = () => {
  return (
    <div className="my-28">
      <div className="bg-[url('https://i.ibb.co/Cwdn87T/newsletter-bg.webp')] bg-cover md:h-[70vh] h-[60vh] lg:w-11/12 mx-auto">
        <div className="lg:w-8/12 w-10/12 mx-auto flex justify-center items-center">
          <div className="text-center">
            <h4 className="primary-color lg:text-3xl md:text-2xl text-xl ">
              SPECIAL OFFER FOR SUBSCRIPTION
            </h4>
            <h3>GET INSTANT DISCOUNT FOR MEMBERSHIP</h3>
            <p>
              Subscribe our newsletter and all latest news of our latest
              product, promotion and offers
            </p>
            <div>
              <input
                type="text"
                placeholder="Enter Your Email"
                class="input input-bordered w-full max-w-xs"
              />
              <input className="btn" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
