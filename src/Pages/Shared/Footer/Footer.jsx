import React from "react";
import "./Footer.css";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="py-8 footer-bg text-white">
      <div className="w-11/12 text-center mx-auto">
        <small className="footer-text sm:text-sm text-xs">
          Copyright &copy; {year}. Made With by <AiFillHeart className="text-red-700"></AiFillHeart>{" "}
          Nishat Fariza
        </small>
      </div>
    </div>
  );
};

export default Footer;
