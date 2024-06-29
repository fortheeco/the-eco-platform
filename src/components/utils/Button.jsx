import React from "react";

export const CustomButton = ({ content, variant, click }) => {
  return (
    <div
      className={`bg-[#1DB559] cursor-pointer px-4 rounded-[6px] p-1 font-montserrat text-[14px] font-light ${variant}`}
    >
      {content}
    </div>
  );
};
