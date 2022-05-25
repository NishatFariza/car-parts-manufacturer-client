import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import MySills from "../MySkills/MySills";
import MyPortfolioBanner from "../PortfolioBanner/PortfolioBanner";

const MyPortfolio = () => {
  return (
    <div>
      <MyPortfolioBanner></MyPortfolioBanner>
      <AboutMe></AboutMe>
      <MySills></MySills>
      <MyPortfolio></MyPortfolio>
    </div>
  );
};

export default MyPortfolio;
