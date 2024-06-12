import React, { Fragment, useState, useEffect } from "react";
import { styles, layout } from "../../style";
import "./landingPage.css";
import heroImg from "../../assets/landingpage/ecoBannerImg.png";
import fadedGlobe from "../../assets/landingpage/fadedGlobe.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" ">
      <div
        className={`${layout.section} ${styles.flexBetween} items-center mx-auto w-full relative`}
      >
        <img
          src={fadedGlobe}
          alt=""
          className="left-0 z-0 absolute top-[6.5rem] w-[60%] "
        />
        <div className="w-full z-10">
          <div className="mt-[-8rem] ml-12 z-10">
            <p className="font-semibold text-[32px] ">
              ECHO problems and projects in <br /> your local ECO
            </p>

            <Link to={"/login"}>
              <div className="mt-4 bg-ecoGreen py-2 px-4 w-[8rem]  text-center rounded-md text-[#fff] ">
                EcHo{" "}
              </div>
            </Link>
          </div>
        </div>

        <img src={heroImg} alt="" className=" md:mr-[-30px] mt-20" />
      </div>
    </div>
  );
};

export default Hero;
