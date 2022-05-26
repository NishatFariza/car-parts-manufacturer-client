import React from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const ContactMe = () => {
  return (
    <div className="lg:h-[60vh] h-screen bg-black ">
      <div className="w-11/12 mx-auto">
        <h3 className="lg:text-4xl text-2xl text-center text-yellow-600 lg:pt-12 pt-6">
          Contact me
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-12 mt-6 gap-5">
          <div className="text-center border border-yellow-600 rounded-xl lg:py-8 py-4">
            <MdAddLocationAlt className="w-full text-yellow-600 lg:text-3xl text-2xl"></MdAddLocationAlt>
            <p className=" text-yellow-600 lg:text-xl text-base mt-2">
              Joypurhat, Bangladesh
            </p>
          </div>
          <div className="text-center border border-yellow-600 rounded-xl lg:py-8 py-4">
            <FaPhone className="w-full text-yellow-600 lg:text-3xl text-2xl"></FaPhone>
            <p className=" text-yellow-600  mt-2 lg:text-xl text-base">+88 01601228858</p>
          </div>
          <div className="text-center border border-yellow-600 rounded-xl lg:py-8 py-4">
            <FaEnvelope className="w-full text-yellow-600 lg:text-3xl text-2xl"></FaEnvelope>
            <p className=" text-yellow-600 lg:text-xl text-base mt-2">
              nishatfariza1@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
