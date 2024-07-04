import React from "react";
import LoginNav from "../../Nav/Loginnav.jsx";
import { Hero } from "./Hero.jsx";
import { ProfileProjects } from "./ProfileBody.jsx";

export const Profile = () => {
  return (
    <>
      <LoginNav />
      <Hero />
      <ProfileProjects />
    </>
  );
};
