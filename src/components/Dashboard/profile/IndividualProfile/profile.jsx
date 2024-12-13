import React, { useState, useEffect } from "react";
import LoginNav from "../../../Nav/Loginnav.jsx";
import { Hero } from "./Hero.jsx";
import { ProfileProjects } from "./ProfileBody.jsx";
import { ProfileRight } from "./profileRight.jsx";
import { layout } from "../../../../style.js";
import api from "../../../../api/axios.js";
import { fetchUserData } from "../../../../appRedux/actions/userProfile.js";
import { useDispatch, useSelector } from "react-redux";

export const IndividualProfile = () => {
  const dispatch = useDispatch();
  // const [userData, setUserData] = useState([]);
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <div className={`w-full h-full overflow-y-hidden bg-gray-50`}>
      <LoginNav />
      <div className="h-[6rem]"></div>
      <div
        className={`${layout.section} h-[85svh] flex flex-col lg:flex-row w-full gap-10 justify-between `}
      >
        <div className="w-full h-full lg:w-[70%]  overflow-y-auto">
          <Hero />
          <ProfileProjects />
        </div>
        <div className="w-[30%] pr-4 hidden lg:block">
          <ProfileRight />
        </div>
      </div>
    </div>
  );
};
