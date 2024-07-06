import React from "react";
import { IoMdShare } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";
import { FaReply } from "react-icons/fa6";

export const Ideas = () => {
  return (
    <div className="border border-[#979797] p-4 rounded-[12px] ">
      <div className="flex items-center justify-between pb-4 border-b-[0.5px] border-black">
        <div className=" pt-6 flex items-center gap-10">
          <div className="flex items-center gap-2 text-sm text-[#3D433F]">
            <img src={HeroImage} alt="" className="w-6 h-6" />
            Gbenro Adams
          </div>

          <p className="text-sm">
            Eco Category: <span className="text-ecoBlue">Community</span>
          </p>

          <div className="flex items-center gap-2 text-[#0B0A0A] text-sm">
            <FaLocationDot className="text-[#8A8A8A]" />
            Ikeja, Lagos
          </div>
        </div>

        <IoMdShare />
      </div>

      <p className="mt-4 text-sm">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit nostru.
        Exercitation veniam consequat sunt nostru.Velit officia mollit consequat
        duis enim velit mollit.{" "}
      </p>

      <div className="flex flex-col sm:flex-row gap-6 items-center mt-6">
        <div className="flex bg-[#2EA2CF] w-full sm:w-1/2 p-2 rounded-md text-white items-center justify-between">
          <p className="text-sm sm:text-base">UNSdg Goal:</p>
          <p className="text-sm sm:text-base">3: Good health and well being</p>
        </div>
        <div className="mt-4 sm:mt-0 text-[12px]  text-[#979797] flex items-center gap-2">
          Posted: 11:34pm 02 mar,2024
        </div>
      </div>

      <div>
        <p className="text-sm mt-6">
          Alcohol based exposures through inadvertently consuming hand
          sanitizer, have been observed to produce more negative side effects
          for children than non-alcohol based.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center mt-6">
          <div className="flex  items-center gap-1 ">
            <FaReply />
            Reply
          </div>
          <div className="mt-4 sm:mt-0 text-[12px]  text-[#979797] flex items-center gap-2">
            Posted: 11:34pm 02 mar,2024
          </div>
        </div>
      </div>
    </div>
  );
};
