import React from "react";
import Stroke from "../../assets/SVG/organization-stroke.svg";
import { ORGANIZATIONS } from "../data";

export default function Org() {
  return (
    <section className=" sm:px-16 px-8  py-8 flex flex-col justify-center gap-10 w-full mt-10">
      <p className="text-[28px]  relative text-center tracking-wider font-[500]">
        Create your <span className="font-bold">PALs</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[80%] mx-0 md:mx-auto  gap-8 ">
        {ORGANIZATIONS.map((org) => (
          <OrgCard
            title={org.title}
            description={org.description}
            imgBgColor={org.imgBgColor}
            imgUrl={org.imgUrl}
            bg={org.bg}
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
  bg,
}) => {
  return (
    <div
      className="w-full rounded-[20px] shadow-3xl  py-4 px-6 bg-gray-100 relative"
      style={{ backgroundColor: imgBgColor }}
    >
      <img src={bg} alt="" className="absolute bottom-0 right-0" />
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
