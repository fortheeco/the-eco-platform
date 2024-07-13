import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import sdgIcon from "../../../../assets/new-landing/sdg.svg";
import { AiFillPicture } from "react-icons/ai";

export const PostProblems = () => {
  return (
    <div className="w-full px-2 pt-12">
      <div className="w-full  rounded-[12px] fullBox-shadow bg-[#fff]">
        <div className="w-full p-8 flex flex-col">
          <p className="bg-ecoGreen text-white font-light w-fit px-4 py-1 rounded-md flex gap-6 items-center">
            ECO category
            <IoIosArrowDown />
          </p>

          <textarea
            name="text"
            id=""
            cols="10"
            rows="2"
            placeholder="Your Eco Problem"
            className="w-full  mt-8  rounded-md outline-none text-sm"
          ></textarea>
        </div>

        <div className="w-full flex justify-between items-center border-t  pt-4 pr-4 pb-8 border-t-gray-300">
          <div className="w-[40%] flex gap-4 items-center px-4 py-1  bg-white border-[0.4px] border-[#2D2D2D] rounded-[6px]">
            <MdLocationOn className="" />
            <input
              placeholder="Location (City, State)"
              className=" h-8 outline-none text-sm "
            />
          </div>

          <div className="w-[40%]  flex gap-4 items-center px-4 py-1   border-[0.4px] border-[#2D2D2D] rounded-[6px]">
            <img src={sdgIcon} alt="" className="w-[20px] h-[20px]" />
            <input
              placeholder="Select UNSD goal"
              className=" h-8 w-full outline-none text-sm "
            />

            <IoIosArrowDown />
          </div>

          <div>
            <AiFillPicture className="text-[20px] cursor-pointer" />
          </div>

          <div className="bg-[rgb(29,181,89,0.4)] py-1 px-8 text-sm rounded-sm cursor-pointer">
            EcHo
          </div>
        </div>
      </div>
    </div>
  );
};
