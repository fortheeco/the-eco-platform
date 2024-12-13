import React from "react";

export const About = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="bg-white p-4 w-full h-full">
        <p className="font-[500] text-sm"> Organization Information</p>

        <div className="border-b border-[#ACB2B0] py-6 flex flex-col gap-4 text-sm">
          <p>Mission Statement</p>
          <p>
            Cras egestas purus in mattis sed lorem a. Et arcu ac lorem ipsum
            nulla. Phasellus donec facilisi nec felis est accumsan porttitor
            mattis fringilla. Et sed sed nunc risus mauris bibendum blandit sed
            sit. Mi hendrerit risus magna lacinia placerat enim enim diam.
            Tellus elementum viverra fringilla turpis at.
          </p>
        </div>

        <div className="border-b border-[#ACB2B0] py-6 flex flex-col gap-4 text-sm">
          <p>Organization Description</p>
          <p>
            Cras egestas purus in mattis sed lorem a. Et arcu ac lorem ipsum
            nulla. Phasellus donec facilisi nec felis est accumsan porttitor
            mattis fringilla. Et sed sed nunc risus mauris bibendum blandit sed
            sit. Mi hendrerit risus magna lacinia placerat enim enim diam.
            Tellus elementum viverra fringilla turpis at.
          </p>
        </div>

        <div className="py-6 flex flex-col gap-4 text-sm">
          <p>Registration Number</p>
          <p>1413534675487867</p>
        </div>
      </div>

      {/* Areas of Focus */}

      <div className="bg-white p-4 w-full h-full">
        <p className="font-[500] text-sm">Areas of Focus</p>

        <div className="border-b border-[#ACB2B0] py-6 flex flex-col gap-4 text-sm">
          <p>Primary area 0f focus</p>
          <p>Environmental Sustainability</p>
        </div>

        <div className="border-b border-[#ACB2B0] py-6 flex flex-col gap-4 text-sm">
          <p>Secondary area of focus</p>
          <p>Health</p>
        </div>

        <div className="border-b border-[#ACB2B0] py-6 flex flex-col gap-4 text-sm">
          <p>Geographic are of location</p>
          <p>Lagos, Nigeria</p>
        </div>

        <div className="py-6 flex flex-col gap-4 text-sm">
          <p>Sustainable development goal targeted</p>
          <ul className="text-[#0F172A] flex items-center gap-6">
            <li className="flex items-center gap-2">
              <p className="w-3 h-3 border border-[#94A3B8] rounded-sm"></p> No
              Poverty
            </li>
            <li className="flex items-center gap-2">
              <p className="w-3 h-3 border border-[#94A3B8] rounded-sm"></p>{" "}
              Zero Hunger
            </li>
            <li className="flex items-center gap-2">
              <p className="w-3 h-3 border border-[#94A3B8] rounded-sm"></p>{" "}
              Quality Education
            </li>
          </ul>
        </div>
      </div>

      {/* Collaboration Interests */}

      <div className="bg-white p-4 w-full h-full">
        <p className="font-[500] text-sm">Collaboration Interests</p>

        <div className="border-b border-[#ACB2B0] py-6 flex flex-col gap-4 text-sm">
          <p>Collaboration</p>
          <p>Partners</p>
        </div>

        <div className="border-b border-[#ACB2B0] py-6 flex flex-col gap-4 text-sm">
          <p>Projects Interest</p>
          <p>
            Cras egestas purus in mattis sed lorem a. Et arcu ac lorem ipsum
            nulla. Phasellus donec facilisi nec felis est accumsan porttitor
            mattis fringilla. Et sed sed nunc risus mauris bibendum blandit sed
            sit. Mi hendrerit risus magna lacinia placerat enim enim diam.
            Tellus elementum viverra fringilla turpis at.
          </p>
        </div>

        <div className="py-6 flex  gap-40 text-sm">
          <ul className="text-[#0F172A] flex flex-col gap-2 pl-2">
            <li className="mb-2 font-[500]">Resources Available</li>
            <li className="flex items-center gap-2">
              <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
              Volunteers
            </li>
            <li className="flex items-center gap-2">
              <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
              Expertise
            </li>
            <li className="flex items-center gap-2">
              <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
              Training
            </li>
          </ul>

          <ul className="text-[#0F172A] flex flex-col gap-2 pl-2">
            <li className="mb-2 font-[500]">Resources Needed</li>
            <li className="flex items-center gap-2">
              <p className="w-1 h-1 border border-[#94A3B8] rounded-sm bg-black"></p>{" "}
              Funding
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
