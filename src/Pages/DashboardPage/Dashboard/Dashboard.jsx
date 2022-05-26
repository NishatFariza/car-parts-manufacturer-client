import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {
  let [user, loading, error] = useAuthState(auth);
  let [admin, adminLoading] = useAdmin(user);
  // console.log(admin);
  return (
    <div className="">
      <div className="bg-[url('https://i.ibb.co/Qj8JDbk/page-header-bg.webp')] bg-cover md:h-[40vh] h-[40vh] flex flex-col justify-center items-center ">
        <h3 className="text-white lg:text-5xl text-3xl">Dashboard</h3>
      </div>
      <div class="drawer drawer-mobile mt-[64px] Container ">
        <input id="dashboard-drower" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div class="drawer-side ">
          <label for="dashboard-drower" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <li>
              <Link className="border my-1" to={"/dashboard"}>
                My Profile
              </Link>
            </li>
            {admin ? (
              <>
                <li>
                  <Link
                    className="border my-1"
                    to={"/dashboard/manageallorders"}
                  >
                    Manage All Orders
                  </Link>
                </li>
                <li>
                  <Link className="border my-1" to={"/dashboard/addproducts"}>
                    Add a Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="border my-1"
                    to={"/dashboard/manageproducts"}
                  >
                    Manage Product
                  </Link>
                </li>
                <li>
                  <Link className="border my-1" to={"/dashboard/makeadmin"}>
                    Make Admin
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="border my-1" to={"/dashboard/myorder"}>
                    My Order
                  </Link>
                </li>
                <li>
                  <Link className="border  my-1" to={"/dashboard/addreview"}>
                    Add a Review
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
