import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialAuth = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    navigate(user);
  }

  if (loading ) {
    return <Loading></Loading>;
  }

  

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="bg-yellow-600 hover:bg-stone-200 duration-300 md:w-8/12 w-full mx-auto md:py-3 py-2 px-5 md:px-6 flex justify-center items-center rounded-full google-btn md:text-lg text-sm mt-6 mb-4 font-medium "
      >
        <FcGoogle className="mr-4 md:text-3xl text-lg"></FcGoogle>
        LogIn With Google
      </button>
    </div>
  );
};

export default SocialAuth;
