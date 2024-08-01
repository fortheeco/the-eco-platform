import React from "react";
import { IoMdShare } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import HeroImage from "../../../../assets/dashboard/profile/hero-logo.svg";
import { FaReply } from "react-icons/fa6";
import img1 from "../../../../assets/dashboard/feeds/sunSet.svg";
import img2 from "../../../../assets/dashboard/feeds/lakeman.svg";
import Ploop from "../../../../assets/dashboard/feeds/loop.svg";
import Plike from "../../../../assets/dashboard/feeds/pLike.svg";
import Pdislike from "../../../../assets/dashboard/feeds/pdislike.svg";
import Plight from "../../../../assets/dashboard/feeds/pLight.svg";
import sdgIcon from "../../../../assets/new-landing/sdg.svg";
import "../../../../index.css";

export const SingleProblem = (props) => {
  return (
    <div className="px-2">
      {props.loadingFetch ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <img
            src={"/Ecologo.svg"}
            alt=""
            className={`w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] rotating`}
          />
          <p className="mt-2 text-sm">Please wait ...</p>
        </div>
      ) : (
        <>
          {" "}
          {props.problems?.map(
            ({
              category,
              comment_count,
              content,
              downvotes,
              goal,
              images,
              location,
              upvotes,
              user_details,
            }) => (
              <div className="fullBox-shadow p-4 rounded-[12px] mt-6">
                <div className="flex items-center justify-between pb-4 border-b-[0.5px] border-black">
                  <div className="w-[80%] pt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-[#3D433F] font-semibold">
                      <img
                        src={user_details?.image}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />
                      {user_details.full_name}
                    </div>

                    <div className="flex items-center gap-2 text-[#0B0A0A] text-sm">
                      <FaLocationDot className="text-[#8A8A8A]" />
                      {location}
                    </div>

                    <p className="text-sm">
                      Eco Category:{" "}
                      <span className="text-ecoGreen">{category.name}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm">{content}</p>

                {images.length == 3 ? (
                  <div className="mt-4 h-[20rem] flex gap-2">
                    <img
                      src={images[0].image}
                      alt=""
                      className="w-1/2 h-full  object-cover"
                    />
                    <div className="flex flex-col gap-2 w-1/2 h-full">
                      <img
                        src={images[1].image}
                        alt=""
                        className="w-full h-1/2 object-cover"
                      />
                      <img
                        src={images[2].image}
                        alt=""
                        className="w-full h-1/2 object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {images.length == 2 ? (
                  <div className="mt-4 h-[20rem] flex gap-2">
                    <img
                      src={images[0].image}
                      alt=""
                      className="w-1/2 h-full  object-cover"
                    />

                    <img
                      src={images[1].image}
                      alt=""
                      className="w-1/2 h-full object-cover"
                    />
                  </div>
                ) : (
                  <></>
                )}

                {images.length == 1 ? (
                  <div className="mt-4 h-[20rem] flex gap-2">
                    {/* {images.map((img) => ( */}
                    <img
                      src={images[0].image}
                      alt=""
                      className="w-full h-full  object-contain"
                    />
                    {/* ))} */}
                  </div>
                ) : (
                  <></>
                )}

                <div className="flex flex-col sm:flex-row gap-6 items-center mt-6">
                  <div className="flex bg-[#2EA2CF] w-full sm:w-1/2 p-2 rounded-md text-white items-center justify-between">
                    <p className="text-sm sm:text-base">UNSdg Goal:</p>
                    <p className="text-sm sm:text-base">
                      {goal.id}: {goal.description}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-[12px]  text-[#979797] flex items-center gap-2">
                    Posted: 11:34pm 02 mar,2024
                  </div>
                </div>

                <div>
                  {/* <p className="text-sm mt-6">
            Alcohol based exposures through inadvertently consuming hand
            sanitizer, have been observed to produce more negative side effects
            for children than non-alcohol based.
          </p> */}

                  <div className="flex justify-between items-center mt-6 border-t border-inputBorder pt-4">
                    <div className="flex  items-center gap-1 text-sm text-[#474747]">
                      <img src={Ploop} alt="" className="h-6 w-6" />
                      15
                    </div>
                    <div className="flex  items-center gap-1 text-sm text-[#474747]">
                      <img src={Plike} alt="" className="h-6 w-6" />
                      {upvotes}
                    </div>
                    <div className="flex  items-center gap-1 text-sm text-[#474747]">
                      <img src={Pdislike} alt="" className="h-6 w-6" />
                      {downvotes}
                    </div>
                    <div className="flex  items-center gap-1 text-sm text-[#474747]">
                      <img src={Plight} alt="" className="h-6 w-6" />
                      225
                    </div>
                    <div>
                      <IoMdShare />
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}{" "}
    </div>
  );
};
