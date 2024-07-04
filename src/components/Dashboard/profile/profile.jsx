import React from "react";
import LoginNav from "../../Nav/Loginnav.jsx";
import { Hero } from "./Hero.jsx";
import { ProfileProjects } from "./ProfileBody.jsx";
import { ProfileRight } from "./profileRight.jsx";

export const Profile = () => {
  return (
    <div className="w-full h-full overflow-y-hidden">
      <LoginNav />
      <div className="h-40"></div>
      <div className="h-[85svh]  flex">
        <div className="h-full w-[75%] overflow-y-auto">
          {" "}
          <Hero />
          <ProfileProjects />
        </div>
        <div className="w-[25%]">
          <ProfileRight />
        </div>
      </div>
    </div>
  );
};
