import React from "react";
import "./chat.css";
import micsvg from "../../assets/mic.svg";
import ecoiconvg from "../../assets/ecoicon.svg";
import arrowdiagonal from "../../assets/arrowdiagonal.svg";
import imagesvg from "../../assets/image.svg";
import image2svg from "../../assets/image2.svg";
import threedotssvg from "../../assets/threedotsicon.svg";
import arrowleftsvg from "../../assets/arrowleft.svg";
import multipleiconsvg from "../../assets/multipleicon.svg";
import { useState } from "react";

export default function ProjectParticipants() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      {" "}
      <div className=" w-full  flex sm:w-[90%] mx-auto relative justify-center items-center  ">
        <div className="w-[120%]  -ml-14   border-black border rounded-lg sm:-ml-36 h-full sm:h-[30rem] bg-white">
          <div className="grid bg-[#D8F6E4]  rounded-b-none rounded-lg grid-cols-3 p-4 gap-4">
            <div className="w-60 font-nunito text-sm flex sm:text-lg   ">
              <div>
                <img className="mr-2 -mt-1" src={arrowleftsvg} />
              </div>
              <div>
                {" "}
                <p className="sm:text-xl text-md  font-semibold">
                  Project Participants
                </p>
                <small className="text-sm font-medium">The project Name</small>
              </div>
            </div>
          </div>

          <div className="w-full grid justify-items-center">
            <div className="w-[90%] h-[350px] overflow-x-hidden hide-scrollbar pt-24">
              <div className="-mt-16 flex w-[100%]">
                <div className="flex sm:mr-[50%] mr-[27%]">
                  <img src={image2svg} className="sm:w-16 w-8" />
                  <p className="w-[10rem] font-normal sm:text-lg text-sm ">
                    Floyd Mile
                  </p>
                </div>
                <div className="flex">
                  <button className="bg-ecoGreen py-1  mt-1 h-12 sm:px-6 px-3 text-white sm:text-[15px] text-[12px] tracking-[1px] rounded-2xl">
                    Follow
                  </button>
                  <div className="w-96 mt-4">
                    <img className="w-6 cursor-pointer" src={threedotssvg} />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex w-[100%]">
                <div className="flex sm:mr-[50%] mr-[27%]">
                  <img src={image2svg} className="sm:w-16 w-8" />
                  <p className="w-[10rem] font-normal sm:text-lg text-sm ">
                    Floyd Mile
                  </p>
                </div>
                <div className="flex">
                  <button className="bg-ecoGreen py-1  mt-1 h-12 sm:px-6 px-3 text-white sm:text-[15px] text-[12px] tracking-[1px] rounded-2xl">
                    Follow
                  </button>
                  <div className="w-96 mt-4">
                    <img className="w-6 cursor-pointer" src={threedotssvg} />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex w-[100%]">
                <div className="flex sm:mr-[50%] mr-[27%]">
                  <img src={image2svg} className="sm:w-16 w-8" />
                  <p className="w-[10rem] font-normal sm:text-lg text-sm ">
                    Floyd Mile
                  </p>
                </div>
                <div className="flex">
                  <button className="bg-ecoGreen py-1  mt-1 h-12 sm:px-6 px-3 text-white sm:text-[15px] text-[12px] tracking-[1px] rounded-2xl">
                    Follow
                  </button>
                  <div className="w-96 mt-4">
                    <img className="w-6 cursor-pointer" src={threedotssvg} />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex w-[100%]">
                <div className="flex sm:mr-[50%] mr-[27%]">
                  <img src={image2svg} className="sm:w-16 w-8" />
                  <p className="w-[10rem] font-normal sm:text-lg text-sm ">
                    Floyd Mile
                  </p>
                </div>
                <div className="flex">
                  <button className="bg-ecoGreen py-1  mt-1 h-12 sm:px-6 px-3 text-white sm:text-[15px] text-[12px] tracking-[1px] rounded-2xl">
                    Follow
                  </button>
                  <div className="w-96 mt-4">
                    <img className="w-6 cursor-pointer" src={threedotssvg} />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex w-[100%]">
                <div className="flex sm:mr-[50%] mr-[27%]">
                  <img src={image2svg} className="sm:w-16 w-8" />
                  <p className="w-[10rem] font-normal sm:text-lg text-sm ">
                    Floyd Mile
                  </p>
                </div>
                <div className="flex">
                  <button className="bg-ecoGreen py-1  mt-1 h-12 sm:px-6 px-3 text-white sm:text-[15px] text-[12px] tracking-[1px] rounded-2xl">
                    Follow
                  </button>
                  <div className="w-96 mt-4">
                    <img className="w-6 cursor-pointer" src={threedotssvg} />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex w-[100%]">
                <div className="flex sm:mr-[50%] mr-[27%]">
                  <img src={image2svg} className="sm:w-16 w-8" />
                  <p className="w-[10rem] font-normal sm:text-lg text-sm ">
                    Floyd Mile
                  </p>
                </div>
                <div className="flex">
                  <button className="bg-ecoGreen py-1  mt-1 h-12 sm:px-6 px-3 text-white sm:text-[15px] text-[12px] tracking-[1px] rounded-2xl">
                    Follow
                  </button>
                  <div className="w-96 mt-4">
                    <img className="w-6 cursor-pointer" src={threedotssvg} />
                  </div>
                </div>
              </div>

              <div className="mt-2 flex w-[100%]">
                <div className="flex sm:mr-[50%] mr-[27%]">
                  <img src={image2svg} className="sm:w-16 w-8" />
                  <p className="w-[10rem] font-normal sm:text-lg text-sm ">
                    Floyd Mile
                  </p>
                </div>
                <div className="flex">
                  <button className="bg-ecoGreen py-1  mt-1 h-12 sm:px-6 px-3 text-white sm:text-[15px] text-[12px] tracking-[1px] rounded-2xl">
                    Follow
                  </button>
                  <div className="w-96 mt-4">
                    <img className="w-6 cursor-pointer" src={threedotssvg} />
                  </div>
                </div>
              </div>
              {/* ; */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
