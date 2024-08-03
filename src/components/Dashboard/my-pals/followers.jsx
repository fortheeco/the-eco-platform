import React from "react";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";

export const PalFollowers = (props) => {
  switch (props.follow) {
    case "following":
      return (
        <div className="mb-6 flex gap-10 items-center justify-between">
          <div className="flex gap-2 ">
            <img src={HeroImage} alt="" className="h-8 w-8" />

            <div className="text-sm w-[70%]">
              <p className="font-semibold mb-1">Floyd Mile</p>
              <p>
                I believe great product design comes from focusing on the right
                questions, not the right answers.
              </p>
            </div>
          </div>

          <div className="bg-[#85CCB3] w-[6rem] text-center p-2 text-white rounded-xl cursor-pointer text-[12px] font-semibold">
            Unfollow
          </div>
        </div>
      );

    case "notfollowing":
      return (
        <div className="mb-6 flex gap-10 items-center justify-between">
          <div className="flex gap-2 ">
            <img src={HeroImage} alt="" className="h-8 w-8" />

            <div className="text-sm w-[70%]">
              <p className="font-semibold mb-1">Floyd Mile</p>
              <p>
                I believe great product design comes from focusing on the right
                questions, not the right answers.
              </p>
            </div>
          </div>

          <div className="bg-ecoGreen w-[6rem] text-center p-2 text-white rounded-xl cursor-pointer text-[12px] font-semibold">
            Follow
          </div>
        </div>
      );

    case "request":
      return (
        <div className="mb-6 flex gap-10 items-center justify-between">
          <div className="flex gap-2 ">
            <img src={HeroImage} alt="" className="h-8 w-8" />

            <div className="text-sm w-[70%]">
              <p className="font-semibold mb-1">Floyd Mile</p>
              <p>
                I believe great product design comes from focusing on the right
                questions, not the right answers.
              </p>
            </div>
          </div>

          <div className="flex gap-2 text-[12px]">
            <div className="border border-red w-[6rem] text-center p-2 text-red font-semibold rounded-xl cursor-pointer ">
              Reject
            </div>
            <div className="bg-ecoGreen w-[6rem] text-center p-2 text-white rounded-xl cursor-pointer font-semibold ">
              Follow
            </div>
          </div>
        </div>
      );
    default:
  }
};
