import React, { Fragment } from "react";
import Avatar from "../../assets/nav/AvatarEco.svg";
import { styles } from "../../style";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

import "../../index.css";

const Nav = () => {
  return (
    <Fragment>
      <div className="bg-white blur w-full h-12"></div>
      <div className={`${styles.paddingX}  w-full   fixed z-20 `}>
        <div
          className={`pl-8 pr-10  py-1  box-shadow  bg-[#fff] relative h-full flex items-center justify-between`}
        >
          <div className={`${styles.flexCenter} gap-4`}>
            <Link to={"/"}>
              <img
                src={"/Ecologo.svg"}
                alt=""
                className={` w-[4rem] h-[4rem] `}
              />
            </Link>

            <ul className="flex gap-8 text-[#ACB2B0] text-[14px]">
              <li className="flex items-center gap-2 cursor-pointer">ECO</li>
              <Link to={"/pals"}>
                <li>PALs</li>
              </Link>

              <li>Innovation</li>
            </ul>
          </div>

          <div className=" hidden  sm:flex justify-center items-center gap-6 md:text-[14px]   h-full ">
            <Link to={"/login"}>
              <button className=" py-3  text-[15px] text-[#0B3208] rounded-[10px] tracking-[1px]">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="bg-ecoGreen py-3 px-4 text-white text-[15px] tracking-[1px] rounded-[10px]">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
