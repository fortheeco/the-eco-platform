import React from "react";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";
import {
  acceptOrDeclinePalReq,
  unFollowPal,
} from "../../../appRedux/actions/ecoPals";
import { useDispatch } from "react-redux";

export const PalFollowers = (props) => {
  const dispatch = useDispatch();
  console.log("ppFF", props.pal);
  switch (props.follow) {
    case "following":
      return (
        <div className="mb-6 flex gap-10 items-center justify-between">
          <div className="flex gap-2 ">
            <img
              src={
                props.pal.sender_info.image
                  ? props.pal.sender_info.image
                  : HeroImage
              }
              alt=""
              className="h-8 w-8"
            />

            <div className="text-sm ">
              <p className="font-semibold mb-1">
                {props.pal.sender_info.full_name}
              </p>
              <p>{props.pal.sender_info.description}</p>
            </div>
          </div>

          {/* <div
            onClick={() => {
              dispatch(unFollowPal(props.pal.id));
            }}
            className="bg-[#85CCB3] w-[6rem] text-center p-2 text-white rounded-xl cursor-pointer text-[12px] font-semibold"
          >
            Unfollow
          </div> */}
        </div>
      );

    case "notfollowing":
      return (
        <div className="mb-6 flex gap-10 items-center justify-between">
          <div className="flex gap-2 ">
            <img
              src={
                props.pal.sender_info.image
                  ? props.pal.sender_info.image
                  : HeroImage
              }
              alt=""
              className="h-8 w-8 rounded-full"
            />

            <div className="text-sm ">
              <p className="font-semibold mb-1">
                {props.pal.sender_info.full_name}
              </p>
              <p>{props.pal.sender_info.description}</p>
            </div>
          </div>

          <div className="bg-ecoGreen w-[6rem] text-center p-2 text-white rounded-xl cursor-pointer text-[12px] font-semibold">
            Follow
          </div>
        </div>
      );

    case "request":
      return (
        <div className="w-full mb-6 flex gap-10 items-center justify-between">
          <div className="flex gap-2 ">
            <img
              src={
                props.pal.sender_info.image
                  ? props.pal.sender_info.image
                  : HeroImage
              }
              alt=""
              className="h-8 w-8 rounded-full"
            />

            <div className="text-sm ">
              <p className="font-semibold mb-1">
                {props.pal.sender_info.full_name}
              </p>
              <p>{props.pal.sender_info.description}</p>
            </div>
          </div>

          <div className=" flex gap-2 text-[12px]">
            <div
              className="border border-red w-[6rem] text-center p-2 text-red font-semibold rounded-xl cursor-pointer "
              onClick={() => {
                dispatch(acceptOrDeclinePalReq(props.pal.id, "decline"));
              }}
            >
              Decline
            </div>
            <div
              className="bg-ecoGreen w-[6rem] text-center p-2 text-white rounded-xl cursor-pointer font-semibold "
              onClick={() => {
                dispatch(acceptOrDeclinePalReq(props.pal.id, "accept"));
              }}
            >
              Accept
            </div>
          </div>
        </div>
      );
    default:
  }
};
