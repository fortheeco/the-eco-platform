import React from "react";
import Nav from "../Nav/Nav";
import "./chat.css";
import Chatsection from "./Chatsection";
import ProjectParticipants from "./ProjectParticipants";

export default function Chat() {
  return (
    <div>
      <Nav />
      <div className="pt-10 w-[30%]">
        <h1 className="sm:pl-[5rem] pl-[1rem]  mb-6 flex justify-self-start mt-36 font-nunito font-semibold text-lg">
          My Projects
        </h1>
      </div>

      <div className=" w-full  font-nunito flex sm:w-[90%] mx-auto relative justify-center items-center  ">
        <div className="grid w-[100%] grid-cols-2  ">
          <div className="sm:w-[75%] w-[70%] p-2 ml-4 h-[400px] overflow-x-hidden hide-scrollbar  border rounded-lg bg-[#D8F6E4]">
            <div className="bg-[#FFFFFF] w-[95%]  p-2 border rounded-xl h-36 sm:h-28 mb-2">
              <div className="flex mb-3 ">
                <p className=" sm:text-lg text-md">
                  Website Design for a NGO on children's health
                </p>
                <div className="bg-[#1DB559]  w-[18px] h-[18px] sm:w-[33px] sm:h-[33px]  rounded-full">
                  <p className="sm:-mt-0 -mt-1 text-white sm:text-base text-sm p-1 font-semibold  text-center">
                    3
                  </p>
                </div>
              </div>

              <small className="text-[#1DB559] ">~open</small>
            </div>
            <div className="bg-[#FFFFFF] w-[95%]  p-2 border rounded-xl h-36 sm:h-28 mb-2">
              <div className="flex mb-3 ">
                <p className=" sm:text-lg text-md">
                  Website Design for a NGO on children's health
                </p>
                <div className="bg-[#1DB559]  w-[18px] h-[18px] sm:w-[33px] sm:h-[33px]  rounded-full">
                  <p className="sm:-mt-0 -mt-1 text-white sm:text-base text-sm p-1 font-semibold  text-center">
                    3
                  </p>
                </div>
              </div>

              <small className="text-[#1DB559] ">~Ongoing</small>
            </div>

            <div className="bg-[#FFFFFF] w-[95%]  p-2 border rounded-xl h-36 sm:h-28 mb-2">
              <div className="flex mb-3 ">
                <p className=" sm:text-lg text-md">
                  Website Design for a NGO on children's health
                </p>
                <div className="bg-[#1DB559]  w-[18px] h-[18px] sm:w-[33px] sm:h-[33px]  rounded-full">
                  <p className="sm:-mt-0 -mt-1 text-white sm:text-base text-sm p-1 font-semibold  text-center">
                    3
                  </p>
                </div>
              </div>

              <small className="text-[#1DB559] ">~open</small>
            </div>
            <div className="bg-[#FFFFFF] w-[95%]  p-2 border rounded-xl h-36 sm:h-28 mb-2">
              <div className="flex mb-3 ">
                <p className=" sm:text-lg text-md">
                  Website Design for a NGO on children's health
                </p>
                <div className="bg-[#1DB559]  w-[18px] h-[18px] sm:w-[33px] sm:h-[33px]  rounded-full">
                  <p className="sm:-mt-0 -mt-1 text-white sm:text-base text-sm p-1 font-semibold  text-center">
                    3
                  </p>
                </div>
              </div>

              <small className="text-[#1DB559] ">~closed</small>
            </div>
          </div>
          <Chatsection />
          {/* <ProjectParticipants /> */}
        </div>
      </div>
    </div>
  );
}
