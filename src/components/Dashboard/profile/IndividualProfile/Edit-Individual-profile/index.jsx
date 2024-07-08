import React, { useState } from "react";
import LoginNav from "../../../Nav/Loginnav.jsx";
import { Hero } from "../Hero.jsx";
import { ProfileProjects } from "../ProfileBody.jsx";
import { ProfileRight } from "../profileRight.jsx";
import { layout } from "../../../../style.js";
import avatar from "../../../../assets/dashboard/profile/MaleMemojis.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { OrganisationInfo } from "./organisationInfo.jsx";
import { ContactDetails } from "./contactDetails.jsx";
import { AreasOfFocus } from "./areasOfFocus.jsx";
import { CollaborationIntrst } from "./collaborationIntrst.jsx";

export const EditProfileIndex = () => {
  const [activeTab, setActiveTab] = useState("Organization Information");
  return (
    <div className={`w-full h-[100svh] overflow-y-auto bg-gray-50`}>
      <LoginNav />
      <div className="h-[8rem]"></div>
      <div
        className={`${layout.section} h-full flex w-full gap-10 justify-center px-40`}
      >
        <div className="h-full w-[70%] p-8 bg-[#Fff] overflow-y-auto ">
          <p className="text-[20px] font-[500]">Edit Profile</p>

          <div className="flex items-center gap-4 mt-12">
            <img src={avatar} alt="" className="h-28 w-28" />
            <p className="bg-ecoGreen text-white text-sm px-6 py-2 rounded-md">
              Edit Image
            </p>
            <div className="bg-red p-4  rounded-full text-white ">
              <RiDeleteBin6Line />
            </div>
          </div>
          {/* tabs */}
          <div className="flex justify-between  cursor-pointer mt-8 mb-6">
            <p
              className={
                activeTab === "Organization Information"
                  ? "text-black font-bold  cursor-pointer text-sm"
                  : "text-gray-500 cursor-pointer text-sm"
              }
              onClick={() => setActiveTab("Organization Information")}
            >
              Organization Information
            </p>

            <p
              className={
                activeTab === "Contact Details"
                  ? "text-black font-bold cursor-pointer text-sm"
                  : "text-gray-500 cursor-pointer text-sm"
              }
              onClick={() => setActiveTab("Contact Details")}
            >
              Contact Details{" "}
            </p>
            <p
              className={
                activeTab === "Areas of Focus"
                  ? "text-black font-bold  cursor-pointer text-sm"
                  : "text-gray-500 cursor-pointer text-sm"
              }
              onClick={() => setActiveTab("Areas of Focus")}
            >
              Areas of Focus
            </p>
            <p
              className={
                activeTab === "Collaboration Interests"
                  ? "text-black font-bold  cursor-pointer text-sm"
                  : "text-gray-500 cursor-pointer text-sm"
              }
              onClick={() => setActiveTab("Collaboration Interests")}
            >
              Collaboration Interests
            </p>
          </div>

          {activeTab === "Organization Information" && (
            <div className="flex flex-col lg:flex-row gap-10">
              {" "}
              <OrganisationInfo />
            </div>
          )}

          {activeTab === "Contact Details" && (
            <div className="flex flex-col lg:flex-row gap-10">
              <ContactDetails />
            </div>
          )}

          {activeTab === "Areas of Focus" && (
            <div className="flex flex-col lg:flex-row gap-10">
              <AreasOfFocus />
            </div>
          )}
          {activeTab === "Collaboration Interests" && (
            <div className="flex flex-col lg:flex-row gap-10">
              <CollaborationIntrst />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
