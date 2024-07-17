import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Info = (props) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full  text-[#595959] text-sm">
        <p>About</p>
        <textarea
          name="text"
          id=""
          cols="10"
          rows="3"
          placeholder="Tell Us About yourself"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        ></textarea>
      </div>

      <div className="w-full text-[#595959] text-sm">
        <p>Hashtag</p>s
        <input
          placeholder="Data Science"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="w-full text-[#595959] text-sm">
        <p>Full Name</p>
        <input
          placeholder="Austin Duke"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="w-full text-[#595959] text-sm">
        <p>Location</p>
        <input
          placeholder="Ikeja G.R.A, Lagos"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="w-full text-[#595959] text-sm">
        <p>Phone Number</p>
        <input
          placeholder="09012345678"
          className="w-full p-4 mt-2 bg-inputBg border border-inputBorder rounded-md outline-none text-sm"
        />
      </div>

      <div className="mx-auto mt-6 bg-ecoGreen text-white px-8 py-2 rounded-md  cursor-pointer">
        Save Changes
      </div>
    </div>
  );
};
