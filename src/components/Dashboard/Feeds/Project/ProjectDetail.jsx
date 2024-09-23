import React from "react";
import { IoMdShare } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const ProjectDetail = (props) => {
  return (
    <div className="w-full px-2 pt-4">
      <div className="border border-[#979797] p-4 rounded-[12px] ">
        <div className="flex flex-col gap-4 pb-4 border-b-2 border-inputBorder">
          <p className="font-[600]">
            Website Design for a NGO on children's health
            <span className="text-ecoBlue text-[11px] ml-2 font-light">
              ~Community
            </span>
          </p>

          <div className="  flex items-start justify-between">
            <p className="text-sm">Bangman Group</p>

            <p className="text-sm">
              Eco Category: <br />{" "}
            </p>

            <div className="flex items-center gap-2 text-[#0B0A0A] text-sm">
              <FaLocationDot className="text-[#8A8A8A]" />
              Ikeja, Lagos
            </div>

            <IoMdShare />
          </div>
        </div>

        <div className="border-b-2 border-inputBorder pb-4">
          <div className="mt-6 flex  justify-between w-full ">
            <p className="text-sm font-[500]">
              Clean water and <br /> Sanitation
            </p>

            <div className="flex gap-4">
              <p className="text-[13px] font-[500]">Required Skills:</p>
              <ul className="grid grid-cols-3 gap-2  items-center  text-[10.5px] font-[600]">
                <li className="border-[0.5px] border-ecoGreen px-2 py-1 rounded-md">
                  Data analytics (5)
                </li>
                <li className="border-[0.5px] border-ecoGreen px-2 py-1 rounded-md">
                  Data science (3)
                </li>
                <li className="border-[0.5px] border-ecoGreen px-2 py-1 rounded-md">
                  Programming (9)
                </li>
                <li className="border-[0.5px] border-ecoGreen px-2 py-1 rounded-md">
                  Data analytics (0)
                </li>
                <li className="border-[0.5px] border-ecoGreen px-2 py-1 rounded-md">
                  Data analytics (0)
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit nostru.
            Exercitation veniam consequat sunt nostru.Velit officia mollit
            consequat duis enim velit mollit.{" "}
          </p>
        </div>

        <div className="mt-4 flex w-full justify-between gap-5 font-[500]">
          <p className="text-[12px]">
            <span className="text-ecoGreen "> Tasks </span> <br />5
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen "> Duration of Task </span> <br />5
            weeks
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen ">Start Date </span> <br />
            22nd June,2022
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen "> No. of need participant </span>{" "}
            <br />
            15
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen "> Reward </span> <br />
            N15,999
          </p>
        </div>

        {/*  */}
        <ul className="text-[#0F172A] flex flex-col gap-1 text-sm mt-6 ">
          <li className=" font-[400] text-ecoGreen">Tasks Requirements</li>
          <li className="flex items-center gap-2">
            <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
            Closeness to area
          </li>
          <li className="flex items-center gap-2">
            <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
            Availability: 3-5 hours every working day
          </li>
          <li className="flex items-center gap-2">
            <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
            Internet enabled smartphone
          </li>
          <li className="flex items-center gap-2">
            <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
            Any other requirements
          </li>
        </ul>

        {/*  */}

        <div className="mt-6 flex gap-2 justify-center">
          <p className="bg-ecoGreen text-sm text-white px-6 py-2 rounded-lg cursor-pointer">
            Apply to project
          </p>
          <p className="text-ecoGreen text-sm bg-white border border-ecoGreen px-6 py-2 rounded-lg cursor-pointer">
            Connect with sponsor
          </p>
        </div>
      </div>
    </div>
  );
};
