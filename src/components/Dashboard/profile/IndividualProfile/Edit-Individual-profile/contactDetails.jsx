import React from "react";

export const ContactDetails = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full  text-[#595959] text-sm">
        <p>Primary Contact Person</p>
        <input
          placeholder="enter full name"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Mission Statement*/}
      <div className="w-full text-[#595959] text-sm">
        <p>Job Title</p>

        <input
          placeholder="enter job title"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Type of Organization */}
      <div className="w-full text-[#595959] text-sm">
        <p>Email Address</p>

        <input
          placeholder="example@email.com"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Year Established */}
      <div className="w-full text-[#595959] text-sm">
        <p>Phone Number</p>
        <input
          placeholder="+2349157764589"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Year Established */}
      <div className="w-full text-[#595959] text-sm">
        <p>Year Established</p>
        <input
          placeholder="What year was your organization established?"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Organization Address */}
      <div className="w-full text-[#595959] text-sm">
        <p>Organization Address</p>
        <input
          placeholder="Where is your organization located?"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      {/* Registration Number */}
      <div className="w-full text-[#595959] text-sm">
        <p>Organization URL</p>
        <input
          placeholder="www.website.com"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="mx-auto mt-6 bg-ecoGreen text-white px-8 py-2 rounded-md  cursor-pointer">
        Save Changes
      </div>
    </div>
  );
};
