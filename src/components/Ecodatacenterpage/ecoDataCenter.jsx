import React, { useState, useEffect } from "react";
import Carousel from "./carouselcontinous";
import { IoSearch } from "react-icons/io5";

export const EcoDataCenter = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="w-[100%] relative h-[27rem]  mt-[8rem]">
      <Carousel />

      <section>
        {" "}
        <div className="flex pl-6 sm:pl-24  items-center justify-center sm:justify-start gap-6 mt-[2rem] ">
          <div className="border border-[#979797] w-full ss:w-[70%] sm:w-[57%] rounded-md py-2 px-4 flex items-center gap-2 justify-between">
            <p className="font-light w-48 md:text-[14px] text-[11px]">
              Search Data name
            </p>
            <input
              placeholder=""
              className="w-[65%] lg:w-[75%] outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <IoSearch className=" hidden sm:block" />
          </div>

          <div className="text-white sm:w-36 sm:h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] mr-4 sm:mr-0 cursor-pointer ">
            <button className="hidden sm:block justify-self-center">
              Search
            </button>
            <IoSearch className="w-5 h-5 block sm:hidden" />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className=" flex w-[100%] items-start sm:justify-start justify-center gap-6 mt-[2rem] ">
          <div className=" sm:pl-8 ss:w-[70%] sm:w-[90%] py-2 px-4 grid justify-items-center sm:flex items-center gap-2 justify-between">
            {/* Label for Search */}
            <p className="font-nunito text-[#00473E] font-semibold w-full text-center md:text-[14px] text-[11px]">
              Search Available Datasets :
            </p>
            <div className="w-[170%] flex-row sm:flex justify-center gap-4">
              {/* Country Dropdown */}
              <select className=" w-[100%] sm:w-44 py-3 px-6 border border-[#AACEC9] rounded-md text-sm mb-4">
                <option value="">Country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries here */}
              </select>

              {/* State Dropdown */}
              <div className="w-full mb-4">
                <select className=" w-[100%]  sm:w-44 py-3 px-6 border border-[#AACEC9] rounded-md text-sm">
                  <option value="">State</option>
                  <option value="ny">New York</option>
                  <option value="ca">California</option>
                  <option value="tx">Texas</option>
                  {/* Add more states here */}
                </select>
              </div>

              {/* Sector Dropdown */}
              <div className="w-full">
                <select className=" w-[100%]  sm:w-44 py-3 px-6 border border-[#AACEC9] rounded-md text-sm">
                  <option value="">Sector</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="health">Healthcare</option>
                  {/* Add more sectors here */}
                </select>
              </div>
              <div className="text-white ml-4 px-14 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer hidden sm:block">
                Search
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
