import React, { Fragment } from "react";
import Avatar from "../../assets/nav/AvatarEco.svg";
import { styles } from "../../style";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

import "../../index.css";

const LoginNav = () => {
  const userData = useSelector((state) => state.userProfile.userD);
  const pathname = window.location.pathname;
  const splitLocation = pathname.split("/");
  return (
    <Fragment>
      <div
        className=" w-full  bg-white pt-8 fixed z-20 "
        style={{ zIndex: "50" }}
      >
        <div className={`${styles.paddingX}  w-full    `}>
          <div
            className={`sm:pl-8 sm:pr-10 px-4  py-1  box-shadow  bg-[#fff] relative h-full flex items-center justify-between`}
          >
            <div className={`${styles.flexCenter} gap-4`}>
              <Link to={"/"}>
                <img
                  src={"/Ecologo.svg"}
                  alt=""
                  className={` w-[4rem] h-[4rem] `}
                />
              </Link>

              <ul className="flex gap-4 lg:gap-8 text-[11px] sm:text-[14px] font-bold sm:font-semibold">
                <li className="flex items-center gap-2 cursor-pointer">
                  Eco
                  {/* <IoIosArrowDown /> */}
                </li>
                <Link to={"/your-Eco"}>
                  <li
                    className={`${
                      splitLocation[1] == "your-Eco"
                        ? "text-ecoGreen"
                        : " text-[#0B3208]"
                    } `}
                  >
                    Your ECO
                  </li>
                </Link>

                <Link to={"/eco-pals"}>
                  <li
                    className={`${
                      splitLocation[1] == "eco-pals"
                        ? "text-ecoGreen"
                        : " text-[#0B3208]"
                    } `}
                  >
                    PALs
                  </li>
                </Link>

                {/* <li>Innovation</li> */}
              </ul>
            </div>

            <Link to={"/individual-profile"} className="sm:hidden">
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={userData?.image ? userData?.image : Avatar}
                  alt=""
                  className={` w-[2rem] h-[2rem] rounded-full `}
                />
              </div>
            </Link>

            <div className=" hidden sm:flex justify-center items-center gap-5 md:text-[14px] bg-[#F9FFFB] absolute right-0 top-0 bottom-0 px-12 h-full box-shadow">
              <p>Problems 24</p>
              <p>Projects 24</p>
              <p className="w-[0.25px] h-6 bg-black"></p>
              <Link to={"/individual-profile"}>
                <div className="flex items-center gap-2 cursor-pointer">
                  <img
                    src={userData?.image ? userData?.image : Avatar}
                    alt=""
                    className={` w-[2rem] h-[2rem]  rounded-full`}
                  />

                  <IoIosArrowDown />
                </div>
              </Link>

              {/* <Link to={"/sign-in"}>
              <button className="">Problems 24</button>
            </Link>
            <Link to={"/sign-up"}>
              <button className="">Projects 24</button>
            </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default LoginNav;
