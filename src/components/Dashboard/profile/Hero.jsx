import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";

export const Hero = () => {
  return (
    <section className=" py-12 lg:py-4   bg-gray-50 ">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={HeroImage}
          alt="hero-image"
          className="w-full md:w-[200px] "
        />
        <div className="flex flex-col items-start gap-4 mt-4 md:mt-0 w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-1 w-full justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-1">
                <h1 className="text-lg md:text-xl lg:text-2xl">Micheal John</h1>
                <span className="text-sm text-[#1DB559]">~Leader</span>
              </div>
              <span className="text-sm text-[#292D32]">Lagos, Nigeria</span>
            </div>
            <button className="px-4 py-2 text-white rounded-full mt-2 md:mt-0 bg-[#1DB559]">
              Edit profile
            </button>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-[#474747]">
            Passionate data enthusiast unraveling hidden truths, unlocking
            possibilities through analytics, visualization, and the art of data.
            Empowering informed decisions, driving business success.{" "}
            <span className="text-[#1DB559]">
              #DataEnthusiast #AnalyticsNinja
            </span>
          </p>

          <div className="flex gap-6 text-[#474747] text-sm">
            <p>
              Following <span className="font-bold">234</span>
            </p>
            <p>
              Followers <span className="font-bold">23</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg mt-12">Edu Tech</div>
    </section>
  );
};
