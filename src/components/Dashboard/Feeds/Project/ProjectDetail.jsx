import React from "react";
import { IoMdShare } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";

export const ProjectDetail = (props) => {
  const myprojectsdetails = useSelector(
    (state) => state.projects.projectDetails
  );

  console.log(myprojectsdetails);
  return (
    <div className="w-full px-2 pt-4">
      <div className="border border-[#979797] p-4 rounded-[12px] ">
        <div className="flex flex-col gap-4 pb-4 border-b-2 border-inputBorder">
          <p className="font-[600] text-sm md:">
            {myprojectsdetails?.project_title}
            <span className="text-ecoBlue text-[11px] ml-2 font-light">
              ~{myprojectsdetails?.eco_category}
            </span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center md:hidden w-full gap-4">
            <p className="text-[12px] md:text-sm">Bangman Group</p>

            <p className="text-[11px] md:text-sm">
              Eco Category: {myprojectsdetails?.eco_category} <br />{" "}
            </p>

            <div className="flex items-center gap-2 text-[#0B0A0A] text-sm">
              <FaLocationDot className="text-[#8A8A8A]" />
              {myprojectsdetails?.location}
            </div>

            <IoMdShare />
          </div>
          {/*  */}
          <div className=" items-center justify-between hidden md:flex">
            <p className="text-sm ">Bangman Group</p>

            <p className="text-sm">
              Eco Category: {myprojectsdetails?.eco_category} <br />{" "}
            </p>

            <div className="flex items-center gap-2 text-[#0B0A0A] text-sm">
              <FaLocationDot className="text-[#8A8A8A]" />
              {myprojectsdetails?.location}
            </div>

            <IoMdShare />
          </div>
        </div>

        <p className="text-sm font-[500] mt-6 md:hidden">
          {myprojectsdetails?.unsd_goals[0]}
        </p>
        <div className="border-b-2 border-inputBorder pb-4">
          <div className="mt-6 flex  justify-between w-full ">
            <p className="text-sm font-[500] hidden md:block">
              {myprojectsdetails?.unsd_goals[0]}
            </p>

            <div className="flex gap-4">
              <p className="text-[13px] font-[500]">Required Skills:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2  items-center  text-[10.5px] font-[600]">
                {myprojectsdetails.required_skills?.map(({ name }) => {
                  return (
                    <li className="border-[0.5px] border-ecoGreen px-2 py-1 rounded-md">
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-[13px]">
            {myprojectsdetails?.project_description}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 w-full justify-between gap-5 font-[500]">
          <p className="text-[12px]">
            <span className="text-ecoGreen "> Status </span> <br />
            {myprojectsdetails?.status}
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen "> Duration of Task </span> <br />
            {myprojectsdetails?.duration_in_weeks} weeks
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen ">Start Date </span> <br />
            {myprojectsdetails?.task_start_date}
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen "> No. of need participant </span>{" "}
            <br />
            {myprojectsdetails?.number_of_people_required}
          </p>
          <p className="text-[12px]">
            <span className="text-ecoGreen "> Reward </span> <br />N{" "}
            {myprojectsdetails?.amount_per_person
              ? myprojectsdetails?.amount_per_person
              : "_"}
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
