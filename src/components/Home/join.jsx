import React from "react";
import joinPC from "../../assets/new-landing/joinnPC.svg";
import { Link } from "react-router-dom";

export const Join = () => {
  return (
    <div className="bg-[#FFF3ED] p-8 flex flex-col justify-center items-center gap-6 mt-10">
      <p className="text-[20px] font-[500] text-[#041E0E] tracking-wider">
        Join our communities and Solve ECO projects with our PALS
      </p>

      <div className="mb-6">
        <img src={joinPC} alt="" />
        <p className="text-center text-[12px]">
          Projects & Problems on the ECO Platform
        </p>
      </div>

      <Link to={"/signup"}>
        <p className="bg-ecoGreen text-white py-1 px-10 rounded-lg cursor-pointer">
          EcHo Projects
        </p>
      </Link>
    </div>
  );
};
