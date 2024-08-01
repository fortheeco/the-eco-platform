import React from "react";
import comBg from "../../assets/landingpage/gradientBg.svg";
import allHands from "../../assets/landingpage/joinHands.svg";

export const Community = () => {
  return (
    <div className=" w-full flex sm:w-[80%] mx-auto relative justify-center items-center  mt-[6rem] h-[17rem] xl:h-[27rem]">
      <img
        src={comBg}
        alt=""
        className="w-full h-[17rem] xl:h-[27rem] object-cover"
      />

      <img
        src={allHands}
        alt=""
        className="z-10 h-[17rem] xl:h-[27rem] object-cover hidden ss:flex top-0 bottom-0 right-0 absolute"
      />

      <div className="z-10 w-[80%] ss:w-[50%] xl:w-[30%] absolute left-8 ss:left-10 py-6 text-white">
        <p className="z-20 text-[22px] mb-2">Community</p>
        <p className="text-sm text-[#D8D8D8]">
          Enim faucibus nunc non tincidunt. Libero mauris eu in suscipit
          molestie venenatis. Et velit sed sagittis.
        </p>
      </div>
      {/* <img src={allHands} alt="" className="z-10 h-full" /> */}
    </div>
  );
};
