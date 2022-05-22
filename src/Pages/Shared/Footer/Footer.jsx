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
      <div className="lg:py-20 py-16 footer-bg  lg:px-8 px-3 flex flex-wrap">
        <div className="lg:w-4/12">
          <Link to="/">
            <img className="lg:w-6/12 mb-6" src={footerLogo} alt="" />
          </Link>
          <p className="footer-description lg:text-base text-sm lg:w-10/12 w-auto">
            The economic impact of machinery manufacturing extends throughout
            the U.S. economy. Machinery industries provide essential and highly.
          </p>
        </div>
        <div className="flex justify-between flex-wrap lg:w-8/12">
          <div className="duration-500 lg:w-auto w-full">
            <h4 className="text-xl lg:mt-auto mt-3 mb-4 font-semibold underline">
              Information
            </h4>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Our Company
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Our Service
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Why We?
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Career
            </Link>
          </div>
          <div className="duration-500 lg:w-auto w-full">
            <h4 className="text-xl mb-4 font-semibold underline lg:mt-auto mt-3">
              Quicklink
            </h4>
            <Link to="/" className="block hover:text-orange-400 duration-300">
              About
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Blog
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Cart
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Shop
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Contact
            </Link>
          </div>
          <div className="duration-500 lg:w-auto w-full">
            <h4 className="text-xl mb-4 font-semibold underline lg:mt-auto mt-3">
              Store Information
            </h4>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              2005 Stokes Apartment. 896,
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              Washington 10010, USA
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              https://example.com
            </Link>
            <Link
              to="/"
              className="block hover:text-orange-400 duration-300 lg:text-base text-sm"
            >
              (+68) 0000000000
            </Link>
          </div>
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
