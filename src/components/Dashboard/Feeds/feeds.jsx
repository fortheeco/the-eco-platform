import React, { useState } from "react";
import LoginNav from "../../Nav/Loginnav";
import { styles } from "../../../style";
import { ProblemsHome } from "./Problems/problemsHome";
import { ProjectHome } from "./Project/projectHome";

export const FeedsHome = () => {
  const [feedspage, setFeedsPage] = useState("Problems");
  return (
    <div className={`w-full   bg-gray-50`}>
      <LoginNav />
      <div className="h-[8rem]"></div>

      <div className={` h-full w-full ${styles.paddingX} `}>
        <div className=" border-b px-10 sm:px-0 border-b-[#979797] flex justify-between sm:justify-center gap-[20%] static">
          <p
            onClick={() => {
              setFeedsPage("Projects");
            }}
            className={`${
              feedspage === "Projects"
                ? "pb-2 sm:pb-4 border-b-4  font-bold  border-b-ecoGreen"
                : " pb-2 sm:pb-4 "
            } cursor-pointer sm:px-20`}
          >
            Projects
          </p>
          <p
            onClick={() => {
              setFeedsPage("Problems");
            }}
            className={`${
              feedspage === "Problems"
                ? "pb-2 sm:pb-4 border-b-4  font-bold  border-b-ecoGreen"
                : "pb-2 sm:pb-4"
            } cursor-pointer sm:px-20`}
          >
            Problems
          </p>
        </div>

        {feedspage === "Problems" ? <ProblemsHome /> : <ProjectHome />}
      </div>
    </div>
  );
};
