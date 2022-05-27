import React from "react";
import skil1 from "../../../images/bootstrap.png";
import skil2 from "../../../images/express.jpg";
import skil3 from "../../../images/firebase.png";
import skil4 from "../../../images/git.png";
import skil5 from "../../../images/heroku.png";
import skil6 from "../../../images/html.png";
import skil7 from "../../../images/material.png";
import skil8 from "../../../images/node.png";
import skil9 from "../../../images/mongodb.png";
import skil10 from "../../../images/react.png";
import skil11 from "../../../images/tailwind.png";
import skil12 from "../../../images/js.png";
import Fade from "react-reveal/Fade";

const MySills = () => {
  return (
    <div className="w-11/12 mx-auto lg:my-12 my-8">
      <Fade top>
        <h3 className="lg:text-4xl text-2xl text-center font-bold">Skills</h3>
      </Fade>
      <Fade top>
        <div className="flex justify-evenly flex-wrap mt-8 ">
          <div className="rounded-lg w-36  m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil12} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">JavaScript</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil10} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">React.Js</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil11} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Tailwind</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil9} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">MongoDb</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil8} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Node.Js</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil7} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Material Ui</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil6} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">HTML</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil5} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Heroku</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil4} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Git</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil3} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Firebase</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil2} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Express.Js</h4>
          </div>
          <div className="rounded-lg w-36 m-5 cursor-pointer justify-center items-center h-32  flex flex-col card-shadow">
            <img className="w-4/12" src={skil1} alt="" />
            <h4 className="lg:text-xl text-sm text-center mt-2">Bootstrap</h4>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MySills;
