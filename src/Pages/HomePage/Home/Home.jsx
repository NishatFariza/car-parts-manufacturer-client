import React from "react";
import Products from "../AllProducts/Products/Products";
import Reviews from "../AllReviews/Reviews/Reviews";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
       <Reviews></Reviews>
    </div>
  );
};

export default Home;
