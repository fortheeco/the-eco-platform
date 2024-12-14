import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import ecoupload from "../../assets/EcoDataCenter/ecoupload.png";
import comBg from "../../assets/landingpage/gradientBg.svg";

export default function UploadData() {
  const [searchInput, setSearchInput] = useState("");
  const [searchbyemail, setSearchbyemail] = useState("");
  return (
    <div className="w-[100%] relative mt-[13rem]  sm:mt-[10rem] mb-36 font-nunito">
      {/* Image with absolute positioning */}
      <img
        src={ecoupload}
        alt="Upload"
        className="absolute top-0 left-0 w-full h-[25rem] object-cover"
      />

      {/* Content section */}
      <div className="relative mt-[2rem] z-10">
        <h1 className="text-center pt-16 text-2xl font-semibold ">
          Eget phasellus tempor proin mi lorem
        </h1>
        <p className="text-center">
          Aliquam tellus hac commodo nunc sapien ultrices cum pharetra
          tincidunt. Eget phasellus tempor proin mi.
        </p>

        <div className="flex ml-4 items-center justify-center gap-6 mt-[2rem] ">
          <div className="border border-[#979797] w-[70%]  sm:w-[60%] rounded-md py-2 px-4 flex items-center gap-2 justify-between">
            <p className="text-[#474747] font-medium  w-[100%] text-xs sm:text-sm  ">
              Upload data set for analysis
            </p>
            <input
              placeholder=""
              className="w-[65%] lg:w-[75%] outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <IoSearch className="hidden sm:block" />
          </div>
          <div className="flex justify-center text-white w-[78px] h-10 sm:w-[128px]   bg-ecoGreen p-1 sm:p-3 rounded-lg sm:rounded-md font-light text-[12px] cursor-pointer  sm:text-sm">
            <button className="sm-mb-3 w-full">Upload Data</button>
          </div>
        </div>

        <div className="sm:flex items-center justify-center gap-6 mt-[2rem]">
          <div className="w-60 font-nunito text-[#00473E] font-semibold  h-10 text-center p-2 rounded-md  text-[14px] cursor-pointer ">
            Enter email adress for results
          </div>
          <div className="border border-[#AACEC9] sm:border-[#979797]  justify-self-center w-[88%] ss:w-[70%] sm:w-[25%] rounded-md py-2 px-2 flex items-center gap-2 justify-between">
            <input
              placeholder="  Enter your email Adress"
              className="w-[65%] lg:w-[75%] outline-none"
              value={searchbyemail}
              onChange={(e) => setSearchbyemail(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
