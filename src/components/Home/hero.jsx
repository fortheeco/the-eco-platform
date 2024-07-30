import React, { Fragment, useState, useEffect } from "react";
import { styles, layout } from "../../style";
import "./landingPage.css";
import solvingIcon from "../../assets/new-landing/problem-solvingcon.png";
import sdgIcon from "../../assets/new-landing/sdg.svg";
import dottedbg from "../../assets/new-landing/dottedGroup.png";
import fadedGlobe from "../../assets/landingpage/fadedGlobe.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLocationOn } from "react-icons/md";

const Hero = () => {
  const [category, setCategory] = useState("Environment");
  return (
    <div className="w-full ">
      <div
        className={`${layout.section} ${styles.flexBetween}  w-[95%] mx-auto mt-20 relative overflow-y-hidden`}
      >
        <img
          src={dottedbg}
          alt=""
          className="absolute top-0 bottom-0 right-0 left-0  w-full animatedBg"
        />

        <div className="z-10 mt-20 w-[40%]">
          <p className="text-[#041E0E] text-[32px] font-[600]">
            Connect and Build <br /> Collaboration through <br /> Data for
            Community
          </p>
          <p className="text-[#474747] text-sm my-4">
            Fames condimentum lobortis vulputate mauris rhoncus. Sit consectetur
            nulla risus ac arcu ultrices. Diam ornare
          </p>

          <div className="flex items-center gap-4 mt-2">
            <p className="bg-ecoGreen text-white py-1 px-10 rounded-lg">EcHo</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="bg-[#F9FFFB] p-8 border-[0.5px] border-inputBorder rounded-[18px] z-10">
          <div className="flex items-center mb-4 gap-8">
            <div>
              <p className="text-[#263238] text-[18px]">EcHo a Problem</p>
              <p className="text-sm mt-2">
                Report a problem in your Environment, Community or Organization
              </p>
            </div>
            <img src={solvingIcon} alt="" className="layerImg" />
          </div>

          {/*  */}
          <p className="text-sm font-[500] text-[#263238] ">
            Select ECO Category
          </p>
          <ul className="flex items-center gap-4 text-[12px] mt-2 mb-4">
            <li className="flex items-center gap-2">
              <p
                className={`w-2 h-2  rounded-full outline outline-[0.5px] outline-offset-4  outline-[#474747] cursor-pointer ${
                  category === "Environment" ? "bg-ecoGreen" : ""
                }`}
                onClick={() => {
                  setCategory("Environment");
                }}
              ></p>{" "}
              Environment
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <p
                className={`w-2 h-2  rounded-full outline outline-[0.5px] outline-offset-4  outline-[#474747] cursor-pointer ${
                  category === "Community" ? "bg-ecoGreen" : ""
                }`}
                onClick={() => {
                  setCategory("Community");
                }}
              ></p>{" "}
              Community
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <p
                className={`w-2 h-2  rounded-full outline outline-[0.5px] outline-offset-4  outline-[#474747] cursor-pointer ${
                  category === "Organization" ? "bg-ecoGreen" : ""
                }`}
                onClick={() => {
                  setCategory("Organization");
                }}
              ></p>{" "}
              Organization
            </li>
          </ul>

          <div>
            <textarea
              name="text"
              id=""
              cols="10"
              rows="6"
              placeholder="Report a problem"
              className="w-full p-4 mt-2 bg-inputBg border border-[#263238] rounded-[12px] outline-none text-sm"
            ></textarea>

            <div className="w-full flex items-center px-4 py-2 mt-4 bg-inputBg border border-inputBorder rounded-[12px]">
              <input
                placeholder="Location (City, State)"
                className="w-full h-10 outline-none text-sm bg-inputBg"
              />
              <div className="bg-ecoGreen p-2 rounded-full">
                <MdLocationOn className="text-white" />
              </div>
            </div>

            <div className="w-full flex items-center px-4 py-2 mt-4 bg-inputBg border border-inputBorder rounded-[12px]">
              <input
                placeholder="Select UnSDg"
                className="w-full h-10 outline-none text-sm bg-inputBg"
              />
              <img src={sdgIcon} alt="" />
            </div>

            <div className="bg-ecoGreen text-white text-sm  p-4 text-center rounded-[12px] mt-4">
              EcHo Problem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
