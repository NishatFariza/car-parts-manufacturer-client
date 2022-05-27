import { sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../useToken/useToken";
import Loading from "../../Shared/Loading/Loading";
import SocialAuth from "../SocialAuth/SocialAuth";
import Zoom from "react-reveal/Zoom";

const LogIn = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // console.log(email);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // console.log(user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

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
        case "auth/wrong-password":
          toast.error("Password is Wrong!", { id: "register" });
          break;
        case "auth/too-many-requests":
          toast.error("Too Many Requests!", { id: "register" });
          break;
        case "auth/user-not-found":
          toast.error("User Not Available, Please Sign Up!", {
            id: "register",
          });
          break;

        default:
          toast.error("Something is wrong", { id: "login" });
          break;
      }
    }
  }, [error]);

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  //reset password
  const handleResetPassword = (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Mail Sent!", { id: "signup" });
      })
      .catch((error) => {
        console.log(error.code);
        const errorCode = error.code;

        if (errorCode === "auth/invalid-email") {
          toast.error("This Email is not Valid!", { id: "signup" });
        }
        if (errorCode === "auth/missing-email") {
          toast.error("Please Enter Email", { id: "signup" });
        }
        if (errorCode === "auth/user-not-found") {
          toast.error("User not With This Email. Please SignUp", {
            id: "signup",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/Qj8JDbk/page-header-bg.webp')] bg-cover md:h-[40vh] h-[40vh] flex flex-col justify-center items-center">
        <h3 className="text-white text-4xl">Login</h3>
      </div>
      <Zoom>
        <div className="lg:w-6/12 w-11/12 mx-auto lg:my-28 my-12 border-2 px-6 py-8 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                })}
                onBlur={(e) => setEmail(e.target.value)}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <button
              type="submit"
              className="text-black bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600"
            >
              LogIn
            </button>
          </form>
          <div>
            <div className="my-6">
              <p className="text-stone-700 text-sm">
                Forget Password?
                <button
                  onClick={handleResetPassword}
                  className="text-sm lg:ml-3 text-yellow-700 font-semibold"
                >
                  Click Reset!
                </button>
              </p>
              <p className="mt-1 text-stone-700 text-sm ">
                Create a new Account?
                <Link
                  to="/register"
                  className="text-sm lg:ml-3 text-yellow-700 font-semibold"
                >
                  Register!
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:w-10/12 mx-auto">
            <div className="divider font-semibold">OR</div>
          </div>
          <SocialAuth></SocialAuth>
        </div>
      </Zoom>
    </div>
  );
};

export default LogIn;
