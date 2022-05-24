import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="lg:h-[90vh] h-screen py-16 mx-auto notFound-bg flex justify-center items-center">
      <div className="lg:w-8/12 w-11/12 mx-auto ">
        <div className="text-center ">
          <p className="sm:text-9xl text-xl font-bold text-white">404</p>
          <p className="sm:text-4xl text-xl font-bold text-white">
            File Not Found
          </p>
          <Link className="btn btn-outline text-white mt-4" to="/">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
