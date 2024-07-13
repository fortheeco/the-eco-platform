import React from "react";
import { IoSearch } from "react-icons/io5";
export const LatestProjectNew = () => {
  return (
    <div className="pt-12 w-full">
      <div className="w-fit flex items-center gap-4 px-4 py-2  bg-inputBg border border-inputBorder rounded-[6px]">
        <IoSearch className="text-black text-[20px] font-bold" />

        <input
          placeholder="Search the Eco"
          className="w-full  outline-none text-sm bg-inputBg"
        />
      </div>

      <div className="mt-14">
        <p className="font-[600] mb-4">Top Projects</p>
        <div className="bg-[#F6FFF9] py-4 px-2">
          <p className="text-sm font-light">
            Promoting sustainable practices in the fashion and textile industry.
          </p>
          <p className="font-[500] text-sm mt-2">Posted by : The poster</p>
        </div>
        <div className="bg-[#F6FFF9] py-4 px-2 mt-2">
          <p className="text-sm font-light">
            Promoting sustainable practices in the fashion and textile industry.
          </p>
          <p className="font-[500] text-sm mt-2">Posted by : The poster</p>
        </div>
        <div className="bg-[#F6FFF9] py-4 px-2 mt-2">
          <p className="text-sm font-light">
            Promoting sustainable practices in the fashion and textile industry.
          </p>
          <p className="font-[500] text-sm mt-2">Posted by : The poster</p>
        </div>
      </div>
    </div>
  );
};
