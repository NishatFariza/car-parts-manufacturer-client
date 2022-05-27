import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import { RiBarChartHorizontalFill } from "react-icons/ri";

const Header = () => {
  const [user] = useAuthState(auth);
  const navManu = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "Blogs",
      to: "/blogs",
    },
    {
      id: 3,
      name: "Portfolio",
      to: "/myportfolio",
    },
  ];

  return (
    <div>
      <header className={`${styles.header}  px-2 `}>
        <div className={styles.nav}>
          <label htmlFor="dashboard-drower" className={styles.hambager}>
            <i className="text-xl text-yellow-600">
              <RiBarChartHorizontalFill />
            </i>
          </label>
          <Link to="/">
            <div className={styles.logoWrapper}>
              <img className="lg:w-4/12 w-6/12  " src={logo} alt="" />
            </div>
          </Link>

          <div className={styles.navWrapper}>
            <input
              type="checkbox"
              name="hamburger"
              id="hamburger"
              className="peer hidden"
            />
            <label htmlFor="hamburger" className={styles.hambager}>
              <i className="text-xl text-yellow-600">
                <RiBarChartHorizontalFill />
              </i>
            </label>

            <div className={styles.navigationArea}>
              <div className={styles.navigationWrapper}>
                <ul className={styles.Ul}>
                  {navManu.map((navItem) => (
                    <li key={navItem.id}>
                      <Link to={navItem.to} className={styles.link}>
                        <span className={styles.menu}> {navItem.name}</span>
                      </Link>
                    </li>
                  ))}
                  {user && (
                    <li>
                      <Link to="/dashboard" className={styles.link}>
                        <span className={styles.menu}> Dashboard</span>
                      </Link>
                    </li>
                  )}
                </ul>

                <div className={styles.loginArea}>
                  {user ? (
                    <Link
                      onClick={() => signOut(auth)}
                      className="font-medium"
                      to="login"
                    >
                      Log Out
                    </Link>
                  ) : (
                    <Link to="login" className="font-medium">
                      Log In
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    // <div className="navbar bg-base-100 px-16">
    //   <div className="flex justify-between">
    //     <Link to="/" className="md:w-4/12 w-4/12 normal-case text-xl">
    //       <img src={logo} alt="" />
    //     </Link>
    //     <div className="dropdown">
    //       <label tabIndex="0" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //       <ul
    //         tabIndex="0"
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-semibold uppercase"
    //       >
    //         <li>
    //           <Link className="focus:bg-none" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/dashboard">Dashboard</Link>
    //         </li>
    //         <li>
    //           <Link to="/blogs">Blogs</Link>
    //         </li>
    //         <li>
    //           <Link to="/myportfolio">My Portfolio</Link>
    //         </li>
    //         <li>
    //           <Link to="/login">Log In</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="justify-between hidden lg:flex ">
    //     <ul className="menu menu-horizontal p-0  font-semibold uppercase">
    //       <li>
    //         <Link className="bg-none focus:outline-none" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //       </li>
    //       <li>
    //         <Link to="/blogs">Blogs</Link>
    //       </li>
    //       <li>
    //         <Link to="/myportfolio">My Portfolio</Link>
    //       </li>
    //       <li>
    //         <Link to="/login">Log In</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;

// All Style Object Here====>>
const styles = {
  header: "bg-gray-50 relative border-b bg-white z-20 pt-2 w-full lg:px-12",
  nav: "flex items-center justify-between py-3",
  logoWrapper:
    "flex lg:justify-start justify-center items-center cursor-pointer",

  navWrapper: "flex items-center justify-end border-l lg:border-l-0",
  hambager:
    "peer-checked:hamburger block relative z-20 p-3 -mr-3 cursor-pointer lg:hidden",
  navigationArea:
    "peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-3.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-200 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 sm:mt-11 lg:mt-0",
  navigationWrapper:
    "flex flex-col h-full justify-between lg:items-center lg:flex-row",
  Ul: "px-6 pt-4 mt-16 lg:mt-0 md:mt-0 text-gray-700 space-y-5 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0",
  link: "group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 ",
  menu: "relative hover:text-yellow-800 text-black font-medium",
  // Login
  loginArea:
    "border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6",
  loginBTN:
    "block px-4 py-1 rounded hover:text-yellow-800 text-black font-medium bg-gradient-to-r from-orange-600 to-orange-700 text-center text-white",
};
