import { useState } from "react";
import { CommunityCard } from "./CommunityCard.jsx";
import { ListItem } from "./ListItem.jsx";
import { Community } from "../../data/index.js";
import Globe from "../../../assets/dashboard/profile/globe.svg";

export const ProfileProjects = () => {
  const [activeTab, setActiveTab] = useState("Problems"); // Default active tab is 'Problems'

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-4 mx-auto max-w-[1440px] bg-gray-50 lg:-mt-[120px]">
      <div className="flex gap-4 sm:gap-10 border-b border-[#ACB2B0] cursor-pointer mb-6 lg:max-w-[900px]">
        <p
          className={
            activeTab === "Problems"
              ? "text-black font-bold border-b-2 border-black"
              : "text-gray-500"
          }
          onClick={() => setActiveTab("Problems")}
        >
          Problems
        </p>
        <p
          className={
            activeTab === "Projects"
              ? "text-black font-bold border-b-2 border-black"
              : "text-gray-500"
          }
          onClick={() => setActiveTab("Projects")}
        >
          Projects
        </p>
        <p
          className={
            activeTab === "Ideas"
              ? "text-black font-bold border-b-2 border-black"
              : "text-gray-500"
          }
          onClick={() => setActiveTab("Ideas")}
        >
          Ideas
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {activeTab === "Problems" && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="-mt-3">
              {Community.map((com) => (
                <CommunityCard key={com.goal} {...com} />
              ))}
            </div>
            <div className="w-full lg:w-[500px] bg-white rounded-lg text-center p-4">
              <div className="flex flex-col items-center">
                <h1 className="w-[100px] text-center text-xl">
                  Upgrade to <span className="font-bold">Partner</span>
                </h1>
                <p className="mt-6 text-[16px]">
                  Purus viverra ac vulputate quam sociis pretium nulla nulla
                  semper.{" "}
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
        )}
        {activeTab === "Projects" && (
          <div className="flex flex-col lg:flex-row gap-10">
            <h1>Project Here</h1>
          </div>
        )}
        {activeTab === "Ideas" && (
          <div className="flex flex-col lg:flex-row gap-10">
            <h1>Ideas Here</h1>
          </div>
        )}
      </div>
    </section>
  );
};
