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
        <div className="flex items-center justify-center gap-6 mt-[2rem]">
          <div className="border border-[#979797] w-full ss:w-[70%] sm:w-[50%] rounded-md py-2 px-4 flex items-center gap-2 justify-between">
            <p className="font-light w-48 md:text-[14px] text-[11px]">
              Search Data name
            </p>
            <input
              placeholder=""
              className="w-[65%] lg:w-[75%] outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <IoSearch />
          </div>

          <div className="text-white w-36 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer hidden sm:block">
            Search
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className=" flex items-center justify-center gap-6 mt-[2rem]">
          <div className=" w-full ss:w-[70%] sm:w-[70%] py-2 px-4 flex items-center gap-2 justify-between">
            {/* Label for Search */}
            <p className="font-light w-full md:text-[14px] text-[11px]">
              Search Available Datasets :
            </p>

            {/* Country Dropdown */}
            <select className="w-full sm:w-44 py-3 px-6 border rounded-md text-sm">
              <option value="">Country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              {/* Add more countries here */}
            </select>

            {/* State Dropdown */}
            <select className="w-full sm:w-44 py-3 px-6 border rounded-md text-sm">
              <option value="">State</option>
              <option value="ny">New York</option>
              <option value="ca">California</option>
              <option value="tx">Texas</option>
              {/* Add more states here */}
            </select>

            {/* Sector Dropdown */}
            <select className="w-full sm:w-44 py-3 px-6 border rounded-md text-sm">
              <option value="">Sector</option>
              <option value="tech">Technology</option>
              <option value="finance">Finance</option>
              <option value="health">Healthcare</option>
              {/* Add more sectors here */}
            </select>
            <div className="text-white ml-4 w-96 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer hidden sm:block">
              Search
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
