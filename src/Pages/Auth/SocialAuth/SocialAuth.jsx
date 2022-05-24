import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {
  return (
    <div>
      <button className="bg-yellow-600 hover:bg-stone-200 duration-300 md:w-8/12 mx-auto md:py-3 py-2 px-5 md:px-6 flex justify-center items-center rounded-full google-btn md:text-lg text-sm ">
        <FcGoogle className="mr-4 md:text-3xl text-lg"></FcGoogle>
        LogIn With Google
      </button>
    </div>
  );
};

export default SocialAuth;
