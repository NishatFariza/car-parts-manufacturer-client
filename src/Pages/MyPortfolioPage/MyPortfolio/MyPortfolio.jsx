import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import MyProjects from "../MyProjects/MyProjects";
import MySills from "../MySkills/MySills";
import MyPortfolioBanner from "../PortfolioBanner/PortfolioBanner";

const MyPortfolio = () => {
  return (
    <div>
      <MyPortfolioBanner></MyPortfolioBanner>
      <AboutMe></AboutMe>
      <MySills></MySills>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default MyPortfolio;
