import React from "react";
import { IoMdShare } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";

export const AllProjects = (props) => {
  const myprojects = useSelector((state) => state.projects.projectlists);

  console.log(myprojects);
  return (
    <div className="w-full px-1 md:px-2 pt-4 flex flex-col gap-4">
      <div
        className="border border-[#979797] p-4 rounded-[12px] cursor-pointer"
        onClick={() => {
          props.setViewProjectDetails(true);
        }}
      >
        <div className="flex items-center justify-between pb-4 border-b-[0.5px] border-black">
          <p>Project Tittle </p>
          {/* <IoMdShare /> */}
        </div>

        <div className=" pt-6 flex items-start justify-between">
          <p className="xs:text-sm text-[12px]">
            Sponsor: <br /> Bangman Group
          </p>

          <p className="xs:text-sm text-[12px]">
            Eco Category: <br /> <span className="text-ecoBlue">Community</span>
          </p>

          <div className=" items-center gap-2 text-[#0B0A0A] hidden xs:flex text-sm ">
            <FaLocationDot className="text-[#8A8A8A]" />
            Ikeja, Lagos
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#0B0A0A]  xs:hidden xs:text-sm text-[12px] mt-2">
          <FaLocationDot className="text-[#8A8A8A]" />
          Ikeja, Lagos
        </div>

        <p className="mt-4 text-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit nostru.
          Exercitation veniam consequat sunt nostru.Velit officia mollit
          consequat duis enim velit mollit.{" "}
        </p>
      </div>

      {/* New porject */}
      <div className="border border-[#979797] p-4 rounded-[12px] ">
        <div className="flex items-center justify-between pb-4 border-b-[0.5px] border-black">
          <p>Project Tittle </p>
          {/* <IoMdShare /> */}
        </div>

        <div className=" pt-6 flex items-start justify-between">
          <p className="xs:text-sm text-[12px]">
            Sponsor: <br /> Bangman Group
          </p>

          <p className="xs:text-sm text-[12px]">
            Eco Category: <br /> <span className="text-ecoBlue">Community</span>
          </p>

          <div className=" items-center gap-2 text-[#0B0A0A] hidden xs:flex text-sm ">
            <FaLocationDot className="text-[#8A8A8A]" />
            Ikeja, Lagos
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#0B0A0A]  xs:hidden xs:text-sm text-[12px] mt-2">
          <FaLocationDot className="text-[#8A8A8A]" />
          Ikeja, Lagos
        </div>

        <p className="mt-4 text-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit nostru.
          Exercitation veniam consequat sunt nostru.Velit officia mollit
          consequat duis enim velit mollit.{" "}
        </p>
      </div>

      {/*  */}
      <div className="border border-[#979797] p-4 rounded-[12px] ">
        <div className="flex items-center justify-between pb-4 border-b-[0.5px] border-black">
          <p>Project Tittle </p>
          {/* <IoMdShare /> */}
        </div>

        <div className=" pt-6 flex items-start justify-between">
          <p className="xs:text-sm text-[12px]">
            Sponsor: <br /> Bangman Group
          </p>

          <p className="xs:text-sm text-[12px]">
            Eco Category: <br /> <span className="text-ecoBlue">Community</span>
          </p>

          <div className=" items-center gap-2 text-[#0B0A0A] hidden xs:flex text-sm ">
            <FaLocationDot className="text-[#8A8A8A]" />
            Ikeja, Lagos
          </div>
        </div>

        <div className="flex items-center gap-2 text-[#0B0A0A]  xs:hidden xs:text-sm text-[12px] mt-2">
          <FaLocationDot className="text-[#8A8A8A]" />
          Ikeja, Lagos
        </div>

        <p className="mt-4 text-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit nostru.
          Exercitation veniam consequat sunt nostru.Velit officia mollit
          consequat duis enim velit mollit.{" "}
        </p>
      </div>
    </div>
  );
};
