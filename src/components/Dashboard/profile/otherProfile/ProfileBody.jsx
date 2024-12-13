import { useState } from "react";
import { CommunityCard } from "./CommunityCard.jsx";
import { Community } from "../../../data/index.js";
import { About } from "./about.jsx";
import { Project } from "./project.jsx";
import { Ideas } from "./ideas.jsx";

export const ProfileProjects = () => {
  const [activeTab, setActiveTab] = useState("Problems"); // Default active tab is 'About'

  return (
    <section className=" py-4   bg-gray-50 ">
      <div className="flex gap-4 sm:gap-10 border-b border-[#ACB2B0] cursor-pointer mb-6 lg:max-w-[900px]">
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
            <Project />
          </div>
        )}
        {activeTab === "Ideas" && (
          <div className="flex flex-col lg:flex-row gap-10">
            <Ideas />
          </div>
        )}
      </div>
    </section>
  );
};
