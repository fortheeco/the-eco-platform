import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const AreasOfFocus = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* Primary Area of Focus*/}
      <div className="w-full text-[#595959] text-sm">
        <p>Primary Area of Focus</p>
        <div className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm flex items-center justify-between cursor-pointer">
          Select area of focus
          <IoIosArrowDown className="text-[22px] font-bold " />
        </div>
      </div>

      <div className="w-full  text-[#595959] text-sm my-4">
        <p>Secondary Areas of Focus</p>
        <ul className="text-[#0F172A]  flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Environmental Sustainability
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Community Development
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Quality Education
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Economic Development
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Education
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Health
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Social Services
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Others
          </li>
        </ul>
      </div>

      {/* Year Established */}
      <div className="w-full text-[#595959] text-sm">
        <p>Geographic Area of Operation</p>
        <input
          placeholder="Enter location 1"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
        <input
          placeholder="Enter location 2 (optional)"
          className="w-full p-4 mt-3 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="w-full  text-[#595959] text-sm my-4">
        <p>Secondary Areas of Focus</p>
        <ul className="text-[#0F172A]  flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p> No
            Poverty
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p> Zero
            Hunger
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Quality Education
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p> Good
            Health and Well-being
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Gender Equality
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Clean Water and Sanitation
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Affordable and Clean Energy
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Decent Work and Economic Growth
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Reduced Inequality
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Industry Innovation, and Infrastructure
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Climate Action
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Responsible Consumption and Production
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p> Life
            on Land
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Peace and Justice Strong Institutions
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Partnerships to achieve the Goal
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-6 bg-ecoGreen text-white px-8 py-2 rounded-md  cursor-pointer">
        Save Changes
      </div>
    </div>
  );
};
