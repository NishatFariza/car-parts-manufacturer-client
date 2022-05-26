import React from "react";
import project1 from "../../../images/project1.png";

const MyProjects = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h4 className="lg:text-4xl text-2xl text-center font-bold">PROJECT</h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="text-center border-4 border-yellow-600 rounded-xl lg:py-8 py-4">
          <div className="w-10/12 mx-auto  rounded-xl">
            <img
              className="rounded-xl border-4 border-yellow-600"
              src={project1}
              alt=""
            />
          </div>
          <p className="text-2xl font-bold mt-4">Motors-Car</p>
          <p className="text-sm font-bold">
            This project is Car Inventory Management.
          </p>
          <div className="flex justify-between items-center w-10/12 mx-auto mt-4">
            <a href="https://motors-car-11.web.app/" target="_blank" all="">
              <button>Live Site</button>
            </a>
            <a href="https://motors-car-11.web.app/" target="_blank" all="">
              <button>Live Site</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
