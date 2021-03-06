import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import axiosPrivate from "../../../Api/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";

const MakeAdmin = () => {
  // const [user, loading] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("users", () =>
    axiosPrivate.get(`https://salty-bayou-55799.herokuapp.com/users`)
  );
  console.log(users?.data);
  console.log(error);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="sm:px-10 px-2 pb-5">
      <h5 className="lg:text-3xl text-xl mb-4 text-center font-bold  text-yellow-500">
        Make Admin
      </h5>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2  sm:py-3"></th>
              <th scope="col" className="py-2 sm:py-3">
                user
              </th>
              <th scope="col" className="py-2 sm:py-3 text-center">
                Author
              </th>
              <th scope="col" className="py-2 sm:py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user, i) => {
              const makeAdmin = () => {
                axiosPrivate
                  .put(
                    `https://salty-bayou-55799.herokuapp.com/user/makeAdmin/${user?.email}`
                  )
                  .then((data) => {
                    console.log(data.data);
                    if (data?.data.acknowledged) {
                      toast.success(
                        `${user.email} has been Successfully Made Admin!`
                      );
                      refetch();
                    }
                  })
                  .catch((error) => {
                    console.log(error.response);
                    if (error.response.status === 403) {
                      toast.error("You are Not Admin");
                    }
                  });
              };

              const deleteAdmin = () => {
                axiosPrivate
                  .put(
                    `https://salty-bayou-55799.herokuapp.com/user/deleteAdmin/${user?.email}`
                  )
                  .then((data) => {
                    console.log(data.data);
                    if (data?.data.acknowledged) {
                      toast.success(
                        `${user.email} has been Successfully Delete from Admin!`
                      );
                      refetch();
                    }
                  })
                  .catch((error) => {
                    console.log(error.response);
                    if (error.response.status === 403) {
                      toast.error("You are Not Admin");
                    }
                  });
              };

              return (
                <tr
                  key={user._id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="px-3 sm:pr-0 sm:pl-8 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]"
                  >
                    {i + 1}
                  </th>
                  <td className="py-2 text-[13px] sm:py-4">{user.email}</td>
                  <td className="py-2 text-[13px] sm:py-4 text-center">
                    {user?.roll !== "admin" && (
                      <button
                        onClick={makeAdmin}
                        className="h-6 px-3 uppercase duration-500 bg-yellow-600 border-none hover:bg-green-600 rounded  text-white"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td
                    onClick={deleteAdmin}
                    className="py-2 text-[13px] sm:py-4 text-center"
                  >
                    <button className="h-6 px-3 uppercase bg-red-500 border-none duration-500  hover:bg-red-800 rounded text-white">
                      Delete Admin
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
