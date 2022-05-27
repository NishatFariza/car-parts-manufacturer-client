import React from "react";
import about from "../../../images/about.jpg";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  return (
    <div className="lg:h-[70vh] h-screen flex lg:flex-row flex-col justify-between items-center lg:px-10 px-2 lg:w-10/12 w-11/12 mx-auto">
      <Fade right>
        <div className="lg:w-5/12 w-10/12 flex  lg:justify-end justify-center mr-8 ">
          <img
            className="lg:w-11/12 w-full transform transition duration-500 cursor-pointer lg:mr-12 mr-0 about-image"
            src={about}
            alt=""
          />
        </div>
      </Fade>
      <Fade left>
        <div className="lg:w-7/12 w-11/12">
          <h3 className="lg:text-4xl text-2xl font-bold">Who AM I</h3>
          <p className="mt-6 font-semibold lg:text-base text-xs">
            A Curious, Passionate Jr. MERN Stack Developer. Love to take Dare
            and handle it professionally. Handle difficulties and errors
            efficient way. Try to keep myself with new technologies and learn
            that.
          </p>
          <div className="lg:mt-4 mt-2">
            <h4 className="lg:text-xl text-sm font-semibold">
              Educational Background
            </h4>
            <p className="lg:text-base text-xs">
              Master of Arts (MA):
              <span className="font-bold"> Bengali Literature</span>
            </p>
            <p className="lg:text-base text-xs">National University-2019</p>
          </div>
          <a href="https://github.com/NishatFariza" target="_blank" alt="">
            <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 mt-6 transition w-30 mx-auto text-center rounded cursor-pointer">
              GIT HUB
            </button>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default AboutMe;
