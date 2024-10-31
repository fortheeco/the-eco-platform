import React, { useState } from "react";
import solvingIcon from "../../../../assets/new-landing/problem-solvingcon.png";
import sdgIcon from "../../../../assets/new-landing/sdg.svg";
import { MdLocationOn } from "react-icons/md";

export const AddProject = () => {
  const [category, setCategory] = useState("Environment");
  return (
    <div>
      <div className=" mx-auto p-8  md:w-[50%] xlg:w-[50%] rounded-[18px] z-10">
        <div className="w-full mb-6 flex justify-between items-center">
          <p>Add Project</p>
          <p className="text-[#606060] text-[12px]">Step 1/2</p>
        </div>{" "}
        <div>
          <p className="text-[#505050]">Project Title</p>
          <input
            placeholder="Type your project title"
            className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-2 "
          />
        </div>
        {/*  */}
        <>
          <p className="text-sm font-[500] text-[#263238] mt-6">ECO Category</p>
          <ul className="grid  grid-cols-2 md:grid-cols-3 items-center gap-4 text-[12px] mt-2 mb-4">
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
        </>
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

          {/* <Link to={"/signup"}>
            <div className="bg-ecoGreen text-white text-sm  p-4 text-center rounded-[12px] mt-4">
              EcHo Problem
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};
