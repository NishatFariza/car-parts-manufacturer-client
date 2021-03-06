import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivate from "../../../Api/axiosPrivate";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: profile,
    refetch,
  } = useQuery("profile", () =>
    axiosPrivate.get(
      `https://salty-bayou-55799.herokuapp.com/profile/${user?.email}`
    )
  );
  // console.log(error);
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  console.log(profile.data);

  const { valueEducation, linkedin, phoneNumber, address } = profile?.data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = e.target.PhoneNumber.value;
    const address = e.target.address.value;
    const valueEducation = e.target.valueEducation.value;
    const linkedin = e.target.linkedin.value;

    const updateProfile = {
      phoneNumber,
      address,
      valueEducation,
      linkedin,
    };

    axiosPrivate
      .put(
        `https://salty-bayou-55799.herokuapp.com/profile/${user?.email}`,
        updateProfile
      )
      .then((data) => {
        console.log(data.data);
        if ((data.data.matchedCount || data.data.upsertedCount) > 0) {
          toast.success("Your profile is Updated");
          refetch();
          e.target.value.reset();
        }
      });
  };

  return (
    <div className="">
      <div className="bg-white w-11/12 mx-auto  shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-4 sm:px-6">
          <h3 className="lg:text-3xl text-xl mb-4 text-center font-bold  text-yellow-500">
            My Information
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="border-t text-left border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.displayName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {phoneNumber}
                </dd>
              </div>
              <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Street Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {address}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Education</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {valueEducation}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Linkedin</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {linkedin}
                </dd>
              </div>
            </dl>
          </div>
          <div className="border-t py-10 text-left border-gray-200 lg:w-6/12 w-11/12 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="number"
                  name="PhoneNumber"
                  id="floating_number"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_number"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="address"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Street Address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="valueEducation"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Education
                  </label>
                </div>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="linkedin"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Linkedin
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
