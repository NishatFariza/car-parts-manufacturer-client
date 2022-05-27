import React from "react";
import { MdAddLocationAlt } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const ContactMe = () => {
  return (
    <div className="lg:h-[60vh] h-screen bg-black ">
      <div className="w-11/12 mx-auto">
        <Fade bottom>
          <h3 className="lg:text-4xl text-2xl text-center text-yellow-600 lg:pt-12 pt-6">
            Contact me
          </h3>
        </Fade>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-12 mt-6 gap-5">
          <Zoom>
            <div className="text-center border border-yellow-600 rounded-xl lg:py-8 py-4">
              <MdAddLocationAlt className="w-full text-yellow-600 lg:text-3xl text-2xl"></MdAddLocationAlt>
              <p className=" text-yellow-600 lg:text-xl text-base mt-2">
                Joypurhat, Bangladesh
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div className="text-center border border-yellow-600 rounded-xl lg:py-8 py-4">
              <FaPhone className="w-full text-yellow-600 lg:text-3xl text-2xl"></FaPhone>
              <p className=" text-yellow-600  mt-2 lg:text-xl text-base">
                +88 01601228858
              </p>
            </div>
          </Zoom>
          <Zoom>
            <div className="text-center border border-yellow-600 rounded-xl lg:py-8 py-4">
              <FaEnvelope className="w-full text-yellow-600 lg:text-3xl text-2xl"></FaEnvelope>
              <p className=" text-yellow-600 lg:text-xl text-base mt-2">
                nishatfariza1@gmail.com
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
