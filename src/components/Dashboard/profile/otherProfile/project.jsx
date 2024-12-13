import React from "react";
import { IoMdShare } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const Project = () => {
  return (
    <div className="border border-[#979797] p-4 rounded-[12px] ">
      <div className="flex items-center justify-between pb-4 border-b-[0.5px] border-black">
        <p>Project Tittle </p>
        <IoMdShare />
      </div>

      <div className=" pt-6 flex items-center gap-40">
        <p className="text-sm">
          Eco Category: <span className="text-ecoBlue">Community</span>
        </p>

        <div className="flex items-center gap-2 text-[#0B0A0A] text-sm">
          <FaLocationDot className="text-[#8A8A8A]" />
          Ikeja, Lagos
        </div>
      </div>

      <p className="mt-4 text-sm">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit nostru.
        Exercitation veniam consequat sunt nostru.Velit officia mollit consequat
        duis enim velit mollit.{" "}
      </p>
    </div>
  );
};
