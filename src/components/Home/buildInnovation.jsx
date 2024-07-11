import React from "react";
import comBg from "../../assets/landingpage/newBgLLight.png";
import allHands from "../../assets/landingpage/joinHands.svg";

export const BuildInnovation = () => {
  return (
    <div className=" w-[100%] relative  mt-[8rem] ">
      <div className=" w-[85%] mx-auto h-full px-10">
        <div className="flex flex-col  px-4 w-[50%] z-20  h-[27rem] justify-center">
          <p className="z-10 text-[22px] mb-2 text-white">
            Build and find African products and services for innovations and
            sustainability
          </p>
          <p className="text-sm text-[#D8D8D8] z-10">
            Engage with problems & Project as Partners, Ambassadors & Leaders
            for Sustainability.
          </p>

          <p className="text-sm mt-8 z-10 bg-ecoGreen text-white w-fit py-2 px-6 rounded-md">
            EcHo Innovations
          </p>
        </div>
      </div>
      <img
        src={comBg}
        alt=""
        className="absolute top-0 bottom-0 left-0 right-0 object-cover"
      />
    </div>
  );
};
