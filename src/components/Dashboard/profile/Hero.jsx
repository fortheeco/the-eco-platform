import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";

// Register necessary elements with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to draw text in the center of the doughnut chart
const centerTextPlugin = {
  id: "centerText",
  afterDraw: (chart) => {
    if (chart.config.options.plugins.centerText) {
      const { ctx } = chart;
      const { centerText } = chart.config.options.plugins;
      const { text, font, color } = centerText;

      const { width, height } = chart;
      const { top, bottom, left, right } = chart.chartArea;

      ctx.save();
      ctx.font = font || "bold 20px Arial";
      ctx.fillStyle = color || "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;
      ctx.fillText(text, centerX, centerY);
      ctx.restore();
    }
  },
};

ChartJS.register(centerTextPlugin);

export const Hero = () => {
  const data = {
    labels: ["Environment", "Community", "Organization"],
    datasets: [
      {
        data: [20, 33, 34],
        backgroundColor: ["#32D272", "#2EA2CF", "#F67218"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      centerText: {
        text: "Community Ambassador",
        font: "12px Arial",
        color: "#2EA2CF",
      },
    },
    cutout: "65%", // Controls the size of the doughnut hole
  };

  return (
    <section className="px-8  lg:px-16 py-12 lg:py-24 mx-auto max-w-[1440px] bg-gray-50 ">
      <div className="h-20"></div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={HeroImage}
            alt="hero-image"
            className="w-full md:w-[200px] lg:-mt-36"
          />
          <div className="flex flex-col items-start gap-4 mt-4 md:mt-0 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 w-full justify-between">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-1">
                  <h1 className="text-lg md:text-xl lg:text-2xl">
                    Micheal John
                  </h1>
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
              possibilities through analytics, visualization, and the art of
              data. Empowering informed decisions, driving business success.{" "}
              <span className="text-[#1DB559]">
                #DataEnthusiast #AnalyticsNinja
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </section>
  );
};
