import React from "react";
import Products from "../AllProducts/Products/Products";
import Reviews from "../AllReviews/Reviews/Reviews";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import CallToAction from "../CallToAction/CallToAction";
import NewsLatter from "../NewsLetter/NewsLatter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <CallToAction></CallToAction>
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;
