import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const OrganisationInfo = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full  text-[#595959] text-sm">
        <p>Organisation Name</p>
        <input
          placeholder="enter your organization name"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Type of Organization */}
      <div className="w-full text-[#595959] text-sm">
        <p>Type of Organization</p>
        <div className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm flex items-center justify-between cursor-pointer">
          Select Organization Type
          <IoIosArrowDown className="text-[22px] font-bold " />
        </div>
      </div>

      {/* Mission Statement*/}
      <div className="w-full text-[#595959] text-sm">
        <p>Mission Statement</p>

        <textarea
          name="text"
          id=""
          cols="10"
          rows="3"
          placeholder="Organization Mission Statement"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        ></textarea>
      </div>

      {/* Type of Organization */}
      <div className="w-full text-[#595959] text-sm">
        <p>Organization Description</p>

        <textarea
          name="text"
          id=""
          cols="10"
          rows="3"
          placeholder="Provide a brief overview of your organization, its goals, and key activities"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        ></textarea>
      </div>

      {/* Year Established */}
      <div className="w-full text-[#595959] text-sm">
        <p>Year Established</p>
        <input
          placeholder="What year was your organization established?"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Registration Number */}
      <div className="w-full text-[#595959] text-sm">
        <p>Registration Number</p>
        <input
          placeholder="Your organization registration number"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="mx-auto mt-6 bg-ecoGreen text-white px-8 py-2 rounded-md  cursor-pointer">
        Save Changes
      </div>
    </div>
  );
};
