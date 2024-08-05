import React from "react";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";
import {
  acceptOrDeclinePalReq,
  unFollowPal,
} from "../../../appRedux/actions/ecoPals";
import { useDispatch } from "react-redux";

export const PalsFollowing = (props) => {
  const dispatch = useDispatch();

  console.log("pp", props.pal);
  return (
    <div className="w-full mb-6 flex gap-10 items-center justify-between">
      <div className="flex gap-2 ">
        <img
          src={
            props.pal.following_info.image
              ? props.pal.following_info.image
              : HeroImage
          }
          alt=""
          className="h-8 w-8"
        />

        <div className="text-sm ">
          <p className="font-semibold mb-1">
            {props.pal.following_info.full_name}
          </p>
          <p>{props.pal.following_info.description}</p>
        </div>
      </div>

      <div
        onClick={() => {
          dispatch(unFollowPal(props.pal.id));
        }}
        className="bg-[#85CCB3] w-[6rem] text-center p-2 text-white rounded-xl cursor-pointer text-sm"
      >
        Unfollow{" "}
      </div>
    </div>
  );
};
