import React, { Fragment, useState } from "react";
import Avatar from "../../assets/nav/AvatarEco.svg";
import { styles, layout } from "../../style";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

import "../../index.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  console.log(active);
  const closeMobileMenu = () => setOpen(false);

  const pathname = window.location.pathname;
  const splitLocation = pathname.split("/");
  return (
    <Fragment>
      <div
        className={` w-full  bg-white pt-8 fixed z-20 `}
        style={{ zIndex: "50" }}
      >
        {/* <div className="h-12  b"></div> */}
        <div className={`${styles.paddingX}  w-full    `}>
          <div
            className={`sm:pl-8 sm:pr-10 px-4  py-1  box-shadow  bg-[#fff] relative h-full flex items-center justify-between`}
          >
            <div className={`${styles.flexCenter} gap-4`}>
              <Link to={"/"}>
                <img
                  src={"/Ecologo.svg"}
                  alt=""
                  className={`w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] `}
                  onClick={() => {
                    setActive("");
                  }}
                />
              </Link>

              <ul className="hidden sm:flex gap-6  text-[13px] font-bold">
                <li
                  className={`${
                    active === "Eco" ? "text-ecoGreen" : " text-[#0B3208]"
                  } flex items-center gap-2 cursor-pointer`}
                  onClick={() => {
                    setActive("Eco");
                  }}
                >
                  ECO
                  {/* <IoIosArrowDown /> */}
                </li>
                <Link to={"/pals"}>
                  <li
                    className={`${
                      splitLocation[1] == "pals"
                        ? "text-ecoGreen"
                        : " text-[#0B3208]"
                    } `}
                  >
                    PALs
                  </li>
                </Link>

                <Link to={"/innovation"}>
                  <li
                    className={`${
                      splitLocation[1] == "innovation"
                        ? "text-ecoGreen"
                        : " text-[#0B3208]"
                    } `}
                  >
                    Innovation
                  </li>
                </Link>
              </ul>
            </div>

            <div onClick={() => setOpen(!open)} className="sm:hidden text-xl">
              {open ? <FaTimes /> : <FaBars />}
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

            <>
              <ul
                className={`
        xsm:hidden bg-white fixed flex flex-col justify-between w-full xs:w-[60%] sm:w-[50%] top-0 overflow-y-auto bottom-0 py-4  pl-4 text-[20px] font-semibold
        duration-500 ${open ? "left-0 " : "left-[-100%] "}
       `}
                style={{ zIndex: "50" }}
              >
                <div
                  onClick={() => setOpen(!open)}
                  className="sm:hidden text-xl text-[#0B3208] absolute right-4"
                >
                  {open ? <FaTimes /> : <FaBars />}
                </div>

                <div
                  className="w-[4rem] h-[4rem] absolute left-1 top-2"
                  onClick={() => setOpen(false)}
                >
                  <Link to={"/"}>
                    <img
                      src={"/Ecologo.svg"}
                      alt=""
                      className="w-[4rem] h-[4rem]  "
                    />
                  </Link>
                </div>

                <div className="flex flex-col gap-4 text-[15px] mt-10">
                  <li
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 cursor-pointer mt-10"
                  >
                    ECO
                    {/* <IoIosArrowDown /> */}
                  </li>
                  <Link to={"/pals"}>
                    <li onClick={() => setOpen(false)}>PALs</li>
                  </Link>

                  <Link to={"/innovation"}>
                    <li onClick={() => setOpen(false)}>Innovation</li>
                  </Link>
                </div>

                <div className="flex flex-col gap-4 pr-4">
                  <Link to={"/login"}>
                    <button
                      onClick={() => setOpen(false)}
                      className=" py-3 w-full text-[15px] text-[#0B3208] rounded-[10px] tracking-[1px] border border-ecoGreen"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to={"/signup"}>
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-ecoGreen py-3 w-full text-white text-[15px] tracking-[1px] rounded-[10px]"
                    >
                      Create Account
                    </button>
                  </Link>
                </div>
              </ul>
            </>
          </div>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
