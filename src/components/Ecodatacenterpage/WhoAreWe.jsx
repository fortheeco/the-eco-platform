import React from "react";

export default function WhoAreWe() {
  return (
    <div className="w-[100%]  h-[100%} pb-20  bg-[#24272B] -mt-[8rem] sm:-mt-[20rem] font-nunito">
      <h1 className="text-center text-[#FFFFFF] pt-16 text-4xl">
        Who are we building for?
      </h1>
      <p className="text-center text-[#BABABA]">
        We offer various solutions for different classes of user groups. What
        group you belong to and what we can do for you? Find below
      </p>

      <div className=" justify-items-center  mt-6 text-[#24272B]">
        <div className=" sm:flex w-[90%]  gap-6 justify-items-center ">
          <div className="bg-[#FFF3ED] h-44 sm:h-32  py-5 px-4 border rounded-lg sm:rounded-lg w-[60%] sm:w-[100%] ">
            <h1 className="font-semibold">As a project manager</h1>
            <p className=" text-sm  ">
              I want to find all ongoing projects in a specific region that are
              addressing healthcare issues so that I can coordinate efforts with
              other stakeholders.
            </p>
          </div>
          <div className="bg-[#FFF3ED] h-44 sm:h-32 sm:mt-0 mt-4  py-5 px-4 border rounded-lg sm:rounded-lg w-[60%] sm:w-[100%] pl-5 pt-3 pr-10 ">
            <h1 className="font-semibold ">As an innovator</h1>
            <p className="text-sm">
              I want to showcase my solution on the platform and make it
              searchable by location so that relevant stakeholders can find and
              implement it.
            </p>
          </div>
        </div>
        <div className="sm:flex w-[90%] justify-items-center gap-4 ">
          <div className="bg-[#F1FAFE]  mt-6   h-44 py-5 px-4 sm:h-32  border rounded-lg sm:rounded-lg  sm:w-[50%] w-[60%]   pl-4 pt-3 pr-10 ">
            <h1 className="font-semibold">As a company</h1>
            <p className="text-sm">
              I want to subscribe to the Premium Tier to access advanced AI
              tools and analyze multiple data sets across different sectors.
            </p>
          </div>
          <div className="bg-[#F1FAFE]  mt-6  h-44 py-5 px-4 sm:h-32  border rounded-lg sm:rounded-lg  sm:w-[50%] w-[60%]   pl-4 pt-3 pr-10 ">
            <h1 className="font-semibold">As a data scientist</h1>
            <p className=" sm:text-sm">
              I want to search for verified data sets by location so that I can
              work on region-specific analyses.
            </p>
          </div>
          <div className="bg-[#F1FAFE]  mt-6 h-44 py-5 px-4 sm:h-32  border rounded-lg sm:rounded-lg  sm:w-[50%] w-[60%]   pl-4 pt-3 pr-10 ">
            <h1 className="font-semibold">As a user</h1>
            <p className="text-sm">
              I want to be able to view the number of problems reported in a
              specific country so that I can understand the major challenges in
              that region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
