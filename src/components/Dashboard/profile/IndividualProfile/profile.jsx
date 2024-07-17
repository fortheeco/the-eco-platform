import React, { useState, useEffect } from "react";
import LoginNav from "../../../Nav/Loginnav.jsx";
import { Hero } from "./Hero.jsx";
import { ProfileProjects } from "./ProfileBody.jsx";
import { ProfileRight } from "./profileRight.jsx";
import { layout } from "../../../../style.js";
import api from "../../../../api/axios.js";

export const IndividualProfile = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      // setLoadingFetch(true);
      try {
        const response = await api.get("/edit-profile/");

        console.log(response.data);
        setUserData(response.data);
        // setProblems(response.data.results);
        // console.log(response.data);
        //  setData(response.data);
        // setLoadingFetch(false);
      } catch (error) {
        //  setError(error);
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={`w-full h-full overflow-y-hidden bg-gray-50`}>
      <LoginNav />
      <div className="h-[8rem]"></div>
      <div
        className={`${layout.section} h-[85svh] flex w-full gap-10 justify-center px-40`}
      >
        <div className="h-full w-[70%] pl-8 overflow-y-auto">
          <Hero userData={userData} />
          <ProfileProjects />
        </div>
        <div className="w-[25%] pr-4">
          <ProfileRight />
        </div>
      </div>
    </div>
  );
};
