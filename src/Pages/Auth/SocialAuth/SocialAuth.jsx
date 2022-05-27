import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../useToken/useToken";
import Loading from "../../Shared/Loading/Loading";

const SocialAuth = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user);
  // console.log(token);
  useEffect(() => {
    if (token) {
      toast.success("LogIn Successful");

      navigate(from, { replace: true });
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/popup-closed-by-user":
          toast.error("Login canceled by User!", { id: "social_login" });
          break;
        case "invalid-email":
          toast.error("invalid-email!", { id: "social_login" });
          break;

        default:
          toast.error("Something is wrong", { id: "social_login" });
          break;
      }
    }
  }, [error]);

  if (loading) {
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
