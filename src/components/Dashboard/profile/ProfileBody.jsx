import { useState } from "react";
import { CommunityCard } from "./CommunityCard.jsx";
import { ListItem } from "./ListItem.jsx";
import { Community } from "../../data/index.js";
import Globe from "../../../assets/dashboard/profile/globe.svg";
import { About } from "./about.jsx";

export const ProfileProjects = () => {
  const [activeTab, setActiveTab] = useState("About"); // Default active tab is 'Problems'

  return (
    <section className=" py-4   bg-gray-50 ">
      <div className="flex gap-4 sm:gap-10 border-b border-[#ACB2B0] cursor-pointer mb-6 lg:max-w-[900px]">
        <p
          className={
            activeTab === "About"
              ? "text-black font-bold border-b-2 border-black cursor-pointer"
              : "text-gray-500 cursor-pointer"
          }
          onClick={() => setActiveTab("About")}
        >
          About
        </p>

        <p
          className={
            activeTab === "Problems"
              ? "text-black font-bold border-b-2 border-black cursor-pointer"
              : "text-gray-500 cursor-pointer"
          }
          onClick={() => setActiveTab("Problems")}
        >
          Problems
        </p>
        <p
          className={
            activeTab === "Projects"
              ? "text-black font-bold border-b-2 border-black cursor-pointer"
              : "text-gray-500 cursor-pointer"
          }
          onClick={() => setActiveTab("Projects")}
        >
          Projects
        </p>
        <p
          className={
            activeTab === "Ideas"
              ? "text-black font-bold border-b-2 border-black cursor-pointer"
              : "text-gray-500 cursor-pointer"
          }
          onClick={() => setActiveTab("Ideas")}
        >
          Ideas
        </p>
      </div>

      {activeTab === "About" && (
        <div className="flex flex-col lg:flex-row gap-10">
          <About />
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-10">
        {activeTab === "Problems" && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="-mt-3">
              {Community.map((com) => (
                <CommunityCard key={com.goal} {...com} />
              ))}
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
