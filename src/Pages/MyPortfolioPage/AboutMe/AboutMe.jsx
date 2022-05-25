import React from "react";
import about from "../../../images/about.jpg";

const AboutMe = () => {
  return (
    <div className="h-[60vh] flex justify-between items-center lg:px-10 px-5 w-10/12 mx-auto">
      <div className="w-5/12 flex justify-end mr-8">
        <img className="w-8/12" src={about} alt="" />
      </div>
      <div className="w-7/12">
        <h3 className="text-4xl font-bold">Who AM I</h3>
        <p className="mt-4 font-semibold">
          A Curious, Passionate Jr. MERN Stack Developer. Love to take Dare and
          handle it professionally. Handle difficulties and errors efficient
          way. Try to keep myself with new technologies and learn that.
        </p>
        <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 lg:mt-4  text-white  transition w-30 mx-auto text-center rounded cursor-pointer">
          GIT HUB
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
