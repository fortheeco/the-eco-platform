import React from "react";
import comBg from "../../assets/landingpage/gradientBg.svg";
import allHands from "../../assets/landingpage/joinHands.svg";

export const Community = () => {
  return (
    <div className=" w-[85%]  mx-auto  px-8 lg:px-16  mt-[8rem] h-[17rem]">
      <div className="relative w-full h-full px-10">
        <div className="flex z-20 w-full h-full justify-between">
          <div className="z-10 w-[50%] flex flex-col justify-end py-6 text-white">
            <p className="z-20 text-[22px] mb-2">Community</p>
            <p className="text-sm text-[#D8D8D8]">
              Enim faucibus nunc non tincidunt. Libero mauris eu in suscipit
              molestie venenatis. Et velit sed sagittis.
            </p>
          </div>

          <img src={allHands} alt="" className="z-10 h-full" />
        </div>

        <img
          src={comBg}
          alt=""
          className="absolute top-0 bottom-0 left-0 right-0 object-cover"
        />
      </div>
    </div>
  );
};
