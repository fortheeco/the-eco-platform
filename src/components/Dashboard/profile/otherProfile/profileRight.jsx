import React from "react";
import Globe from "../../../../assets/dashboard/profile/globe.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { ListItem } from "./ListItem.jsx";
import { Doughnut } from "react-chartjs-2";

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
export const ProfileRight = () => {
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
    <div className="h-full overflow-auto bg-[#FBFBFB] flex flex-col gap-5">
      <div className="bg-white p-4 rounded-lg">
        <Doughnut data={data} options={options} />
      </div>

      <div className="bg-white p-4">
        <>
          <p className="mb-6">Contact Person</p>
        </>

        <>
          <p>John Thomas</p>
          <p className="text-[#474747] mb-6 mt-1 text-[13px]">
            Business Development Manager
          </p>
        </>

        <>
          <p className="">Reach Out</p>
          <p className="mt-1 text-ecoGreen text-[13px]">J.Thomas@gmail.com</p>
        </>
      </div>

      <div className="w-full  bg-white rounded-lg text-center p-4">
        <div className="flex flex-col items-center">
          <h1 className="w-[100px] text-center text-xl">
            Upgrade to <span className="font-bold">Partner</span>
          </h1>
          <p className="mt-6 text-[16px]">
            Purus viverra ac vulputate quam sociis pretium nulla nulla semper.{" "}
          </p>
          <div className="mt-6">
            <ListItem>Velit officia consequat duis enim</ListItem>
            <ListItem>Exercitation veniam consequat sunt</ListItem>
            <ListItem>consequat duis enim velit mollit.</ListItem>
          </div>
          <button className="mt-4 bg-[#1DB559] text-white px-2 py-2 rounded-lg">
            Upgrade Plan
          </button>
          <img src={Globe} alt="globe" />
        </div>
      </div>
    </div>
  );
};
