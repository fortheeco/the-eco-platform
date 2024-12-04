import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import ecoupload from "../../assets/EcoDataCenter/ecoupload.png";
import comBg from "../../assets/landingpage/gradientBg.svg";

export default function UploadData() {
  const [searchInput, setSearchInput] = useState("");
  const [searchbyemail, setSearchbyemail] = useState("");
  return (
    <div className="w-[100%] relative mb-36 font-nunito">
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

        <div className="sm:flex flex-row items-center justify-center gap-6 mt-[2rem]">
          <div className="border border-[#979797] w-full ss:w-[70%]  sm:w-[50%] rounded-md py-2 px-4 flex items-center gap-2 justify-between">
            <p className="font-light w-80 md:text-[14px]  text-[11px]">
              Upload data set for analysis
            </p>
            <input
              placeholder=""
              className="w-[65%] lg:w-[75%] outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <IoSearch />
          </div>
          <div className="text-white mt-4 w-36 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[12px] cursor-pointer justify-self-center sm:text-[14px]">
            <button>Upload Data</button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-[2rem]">
          <div className="w-60 h-10 text-center p-2 rounded-md font-light text-[14px] cursor-pointer hidden sm:block">
            Enter email adress for results
          </div>
          <div className="border border-[#979797] ss:w-[70%] sm:w-[25%] rounded-md py-2 px-2 flex items-center gap-2 justify-between">
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
