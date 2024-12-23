import React from "react";
import HeroImage from "../../../assets/dashboard/profile/hero-logo.svg";
import addPals from "../../../assets/pals/profile-add.svg";
import { useDispatch } from "react-redux";
import { followEcoPals } from "../../../appRedux/actions/ecoPals";

export const EcoPals = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full  flex gap-10  justify-between items-center">
      <div className="w-[70%] flex items-center gap-2 ">
        <img
          src={props.pal.image ? props.pal.image : HeroImage}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />

        <div className="text-sm ">
          <p className="font-semibold mb-1">
            {props.pal.full_name}{" "}
            <span className="text-[11px] text-[#1DB559]">~Leader</span>
          </p>
          <p>{props.pal.description} </p>
        </div>
      </div>

      {/* <div className="w-[30%] border border-red">
        <img src={addPals} alt="" className="" />
      </div> */}

      <div className="flex  justify-center w-[8rem] text-center p-2 text-white rounded-xl cursor-pointer text-[12px] font-semibold">
        <img
          src={addPals}
          alt=""
          className="w-10 h-10 hover:border bg-ecoLightGreen rounded-lg hover:border-ecoGreen p-2"
          onClick={() => {
            dispatch(followEcoPals(props.pal.id));
          }}
        />
      </div>
    </div>
  );
};
