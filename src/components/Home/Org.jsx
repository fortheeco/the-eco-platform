import React from "react";
import Stroke from "../../assets/SVG/organization-stroke.svg";
import { ORGANIZATIONS } from "../data";

export default function Org() {
  return (
    <section className=" sm:px-16 px-8 sm:py-12 py-8 flex flex-col justify-center gap-10 w-full">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-[24px] font-[300]">Welcome to THE ECO</p>
        <div className="flex flex-col items-center justify-center text-center mt-2">
          <h4 className="text-[13px] font-light mb-1">
            The ECO is an abbreviation meaning{" "}
          </h4>
          <h2 className="text-[15px] font-[600]">
            ENIVIRONMENT, COMMUNITY & ORGANIZATION
          </h2>
          <img src={Stroke} alt="environment images" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[80%] mx-0 md:mx-auto  gap-4 ">
        {ORGANIZATIONS.map((org) => (
          <OrgCard
            title={org.title}
            description={org.description}
            imgBgColor={org.imgBgColor}
            imgUrl={org.imgUrl}
          />
        ))}
      </div>
    </section>
  );
}

export const OrgCard = ({
  title,
  imgUrl,
  imgBgColor,
  //   imgBg,
  description,
}) => {
  return (
    <div
      className="w-full rounded-[20px] shadow-3xl  py-4 px-6 bg-gray-100"
      style={{ backgroundColor: imgBgColor }}
    >
      <div className="mt-2">
        <div
          className={`w-8 h-8 flex justify-center items-center rounded-full`}
        >
          <img src={imgUrl} alt="{title}" width={30} height={30} />
        </div>
        <h3 className="mt-2 font-montserrat text-2xl font-semibold text-black">
          {title}
        </h3>
        <p className="mt-5 font-montserrat text-sm leading-[25px] text-slate-gray">
          {description}
        </p>
      </div>
    </div>
  );
};
