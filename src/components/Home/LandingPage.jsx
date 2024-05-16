import React, { Fragment, useState, useEffect } from "react";
import { styles, layout } from "../../style";
import "./landingPage.css";
import heroImg from "../assets/landingpage/ecoBannerImg.png";
import fadedGlobe from "../assets/landingpage/fadedGlobe.png";

// import fadedGlobe from "../assets/landingpage/fadedglobe.svg";

export const LandingPage = () => {
  return (
    <div className="relative">
      <div
        className={`${layout.section} ${styles.flexBetween} items-center mx-auto w-full`}
      >
        <div className="w-full ">
          <img
            src={fadedGlobe}
            alt=""
            className="left-0 absolute top-0 w-[60%]"
          />
          <div className="mt-[-12rem] ml-12 ">
            <p className="font-semibold text-[32px] ">
              ECHO problems and projects in <br /> your local ECO
            </p>
            <p className="mt-4 bg-ecoGreen py-2 px-4 w-[8rem] text-center rounded-md text-[#fff]">
              EcHo
            </p>
          </div>
        </div>

        <img src={heroImg} alt="" className=" md:mr-[-30px] " />
      </div>
    </div>
  );
};
