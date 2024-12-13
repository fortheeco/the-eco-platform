import React from "react";

export const CollaborationIntrst = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full  text-[#595959] text-sm my-4">
        <p>What type of collaborators are you looking for?</p>

        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Partners
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Ambassadors
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Leaders
          </li>
        </ul>
      </div>

      {/* Year Established */}
      <div className="w-full text-[#595959] text-sm">
        <p>Describe the types of projects you are interested in</p>

        <textarea
          name="text"
          id=""
          cols="10"
          rows="3"
          placeholder="Organization Mission Statement"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        ></textarea>
      </div>

      <div className="w-full  text-[#595959] text-sm my-4">
        <p>Resources you can offer</p>
        <ul className="text-[#0F172A]  flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>
            Funding
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>
            Volunteers
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Expertise
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Training
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Technology
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Facilities
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            others
          </li>
        </ul>
      </div>

      <div className="w-full  text-[#595959] text-sm my-4">
        <p>Resources you need</p>
        <ul className="text-[#0F172A]  flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>
            Funding
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>
            Volunteers
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Expertise
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Training
          </li>
        </ul>
        <ul className="text-[#0F172A] flex items-center gap-6 pl-2 mt-4">
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Technology
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            Facilities
          </li>
          <li className="flex items-center gap-2">
            <p className="w-3 h-3 border border-[#94A3B8] rounded-sm "></p>{" "}
            others
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-6 bg-ecoGreen text-white px-8 py-2 rounded-md  cursor-pointer">
        Save Changes
      </div>
    </div>
  );
};
