import React from "react";
import "./Footer.css";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import footerLogo from "../../../images/logoFooter .png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="  text-white">
      <div className="lg:py-20 py-16 footer-bg grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:px-6 px-3 lg:gap-5 gap-3">
        <div className="">
          <Link to="/">
            <img className="lg:w-6/12 mb-6" src={footerLogo} alt="" />
          </Link>
          <p className="footer-description">
            The economic impact of machinery manufacturing extends throughout
            the U.S. economy. Machinery industries provide essential and highly.
          </p>
        </div>
        <div className="duration-500">
          <h4 className="text-xl mb-4 font-semibold underline">Information</h4>
          <Link to="/" className="block hover:text-orange-400 duration-300">
            Our Company
          </Link>
          <Link to="/" className="block hover:text-orange-400 duration-300">
            Our Company
          </Link>
          <Link to="/" className="block hover:text-orange-400 duration-300">
            Our Company
          </Link>
          <Link to="/" className="block hover:text-orange-400 duration-300">
            Our Company
          </Link>
        </div>
      </div>
      <div className="bg-black">
        <div className="w-11/12 text-center mx-auto py-8">
          <small className="footer-text sm:text-sm text-xs">
            &copy; {year}.Facmaster, All Rights Reserved. Made With by
            <AiFillHeart className="text-red-700 inline-block mx-1"></AiFillHeart>
            Nishat Fariza
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
