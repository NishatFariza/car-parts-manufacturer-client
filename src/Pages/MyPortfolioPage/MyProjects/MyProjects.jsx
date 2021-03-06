import React from "react";
import project1 from "../../../images/project1.png";
import project2 from "../../../images/project2.png";
import project3 from "../../../images/project3.png";
import Fade from "react-reveal/Fade";

const MyProjects = () => {
  return (
    <div className="w-11/12 mx-auto lg:my-16 my-6 lg:py-12 py-4">
      <Fade top>
        <h4 className="lg:text-4xl text-2xl text-center font-bold">Projects</h4>
      </Fade>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-16 mt-6 gap-5">
        <Fade left>
          <div className="text-center border-2 border-yellow-600 rounded-xl lg:py-8 py-4">
            <div className="w-10/12 mx-auto  rounded-xl">
              <img
                className="rounded-xl border-2 border-yellow-600"
                src={project1}
                alt=""
              />
            </div>
            <p className="lg:text-2xl text-xl font-bold mt-4">Motors Car</p>
            <p className="lg:text-sm text-xs font-bold">
              This project is Car Inventory Management.
            </p>
            <div className="flex lg:flex-row flex-col justify-between items-center w-10/12 mx-auto lg:mt-4 mt-0">
              <a href="https://motors-car-11.web.app/" target="_blank" all="">
                <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 lg:mt-4 mt-4 transition w-30 mx-auto text-center rounded cursor-pointer">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/NishatFariza/motors-car-client"
                target="_blank"
                all=""
              >
                <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 lg:mt-4 mt-2 transition w-30 mx-auto text-center rounded cursor-pointer">
                  Github Repo
                </button>
              </a>
            </div>
          </div>
        </Fade>
        <Fade top>
          <div className="text-center border-2 border-yellow-600 rounded-xl lg:py-8 py-4">
            <div className="w-10/12 mx-auto  rounded-xl">
              <img
                className="rounded-xl border-2 border-yellow-600"
                src={project2}
                alt=""
              />
            </div>
            <p className="lg:text-2xl text-xl font-bold mt-4">
              Collateral Associates
            </p>
            <p className="lg:text-sm text-xs font-bold">
              A lawyer Independent Service Provider Project.
            </p>
            <div className="flex lg:flex-row flex-col justify-between items-center w-10/12 mx-auto mt-4">
              <a
                href="https://collateral-associates-10.web.app/"
                target="_blank"
                all=""
              >
                <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 llg:mt-4 mt-4 transition w-30 mx-auto text-center rounded cursor-pointer">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/NishatFariza/Collateral-Associates"
                target="_blank"
                all=""
              >
                <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 lg:mt-4 mt-2 transition w-30 mx-auto text-center rounded cursor-pointer">
                  Github Repo
                </button>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="text-center border-2 border-yellow-600 rounded-xl lg:py-8 py-4">
            <div className="w-10/12 mx-auto  rounded-xl">
              <img
                className="rounded-xl border-2 border-yellow-600"
                src={project3}
                alt=""
              />
            </div>
            <p className="lg:text-2xl text-xl font-bold mt-4">Fly That Drone</p>
            <p className="lg:text-sm text-xs font-bold">
              This is the react Rechart And Review Project.
            </p>
            <div className="flex lg:flex-row flex-col justify-between items-center w-10/12 mx-auto mt-4">
              <a
                href="https://fly-that-drone-9.netlify.app/"
                target="_blank"
                all=""
              >
                <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 lg:mt-4 mt-4 transition w-30 mx-auto text-center rounded cursor-pointer">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/NishatFariza/Fly-That-Drone"
                target="_blank"
                all=""
              >
                <button className="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 text-black duration-500 lg:mt-4 mt-2 transition w-30 mx-auto text-center rounded cursor-pointer">
                  Github Repo
                </button>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MyProjects;
