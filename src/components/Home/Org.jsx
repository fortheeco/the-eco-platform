import React, { useState } from "react";
import Stroke from "../../assets/SVG/organization-stroke.svg";
import { ORGANIZATIONS } from "../data";
import "./landingPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Org() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const slidersettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay speed in milliseconds
    vertical: true, // Enable vertical sliding
    verticalSwiping: true, // Enable vertical swiping
  };
  return (
    <section className=" sm:px-16 px-8  py-8 flex flex-col justify-center gap-10 w-full mt-10 overflow-x-hidden">
      <p className="text-[26px] sm:text-[28px] relative text-center tracking-wider justify-center font-[500] flex flex-col sm:flex-row gap-6">
        Create your{" "}
        <p className="font-bold  w-[300px]  sm:w-[12rem] mx-auto sm:mx-0 flex items-center sm:text-left">
          <Slider {...slidersettings}>
            <span className="text-ecoGreen">Environment</span>
            <span className="text-ecoBlue">Community</span>
            <span className="text-ecoOrange">Organization</span>
          </Slider>
        </p>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full md:w-[85%] mx-0 md:mx-auto  gap-8 ">
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
// created by mujeeb Alani (OrgCard_EcoDataCenter )
export const OrgCard_EcoDataCenter = ({
  title,
  imgBgColor,
  //   imgBg,
  text1,
  text2,
  bg,
}) => {
  return (
    <div
      className="w-full rounded-[20px] shadow-2xl  py-6 px-6 bg-gray-100 relative"
      style={{ backgroundColor: imgBgColor }}
    >
      <img src={bg} alt="" className="absolute bottom-0 right-0 w-24" />
      <div className="mt-2">
        <h3 className="mt-2 font-montserrat text-sm font-semibold text-black">
          {title}
        </h3>
        <ul className="list-disc">
          <li className="mt-2 font-nunito text-sm font-medium  text-black pr-2">
            {text1}
          </li>
          <li className="mt-2  font-nunito pb-3 text-sm font-medium text-black  pr-2">
            {text2}
          </li>
        </ul>
      </div>
    </div>
  );
};
