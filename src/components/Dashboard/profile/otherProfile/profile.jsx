import React from "react";
import LoginNav from "../../../Nav/Loginnav.jsx";
import { Hero } from "./Hero.jsx";
import { ProfileProjects } from "./ProfileBody.jsx";
import { ProfileRight } from "./profileRight.jsx";
import { layout } from "../../../../style.js";

export const OthersProfileById = () => {
  return (
    <div className={`w-full h-full overflow-y-hidden bg-gray-50`}>
      <LoginNav />
      <div className="h-[8rem]"></div>
      <div
        className={`${layout.section} h-[85svh] flex w-full gap-10 justify-center px-40`}
      >
        <div className="h-full w-[70%] pl-8 overflow-y-auto">
          <Hero />
          <ProfileProjects />
        </div>
        <div className="w-[25%] pr-4">
          <ProfileRight />
        </div>
      </div>
    </div>
  );
};
