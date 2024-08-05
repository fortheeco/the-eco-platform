import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Hero = (props) => {
  const userData = useSelector((state) => state.userProfile.userD);

  console.log(userData);
  return (
    <section className="w-full py-1 lg:py-4   bg-gray-50 ">
      <div className="flex flex-row gap-6 items-center">
        <img
          src={userData?.image ? userData?.image : HeroImage}
          alt="hero-image"
          className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full object-fit"
        />
        <div className="flex flex-col items-start gap-4 mt-4 md:mt-0 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1 w-full justify-between">
            <div className="flex flex-col">
              <div className="flex flex-row items-start md:items-center gap-1">
                <h1 className="text-sm md:text-xl lg:text-2xl font-semibold">
                  {userData?.full_name}
                </h1>
                <span className="text-sm text-[#1DB559]">~Leader</span>
              </div>
              <span className="text-sm text-[#292D32]">
                {" "}
                {userData?.location}
              </span>
            </div>
            <Link
              to={"/edit/profile-individual"}
              className="px-4 py-2 text-white rounded-full mt-2 md:mt-0 bg-[#1DB559]"
            >
              Edit profile
            </Link>
          </div>
          <p className="text-sm  text-[#474747] hidden lg:block">
            {userData?.description ? userData?.description : "_ _"}
            {userData?.hashtags?.map((hashtag) => {
              return <span className="text-[#1DB559]">{hashtag.tag}</span>;
            })}
          </p>

          <div className="hidden  lg:flex gap-6 text-[#474747] text-sm">
            <p>
              Following <span className="font-bold">234</span>
            </p>
            <p>
              Followers <span className="font-bold">23</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm  text-[#474747] lg:hidden">
          {userData?.description ? userData?.description : "_ _"}
          {userData?.hashtags?.map((hashtag) => (
            <span className="text-[#1DB559]">{hashtag.tag}</span>
          ))}
        </p>

        <div className=" flex mt-2 lg:mt-0 lg:hidden gap-6 text-[#474747] text-sm">
          <p>
            Following <span className="font-bold">234</span>
          </p>
          <p>
            Followers <span className="font-bold">23</span>
          </p>
        </div>
        <ul className="flex gap-4  items-center text-sm mt-4">
          {userData?.skills?.map((skill, index) => {
            return (
              <li
                key={index}
                className="border-[0.5px] border-ecoGreen px-4 py-1 rounded-md"
              >
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
