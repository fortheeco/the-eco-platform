import React from "react";

export const CustomButton = ({ content, variant }) => {
  return (
    <div
      className={`bg-[#1DB559] px-4 rounded-[6px] p-1 font-montserrat text-[14px] font-light ${variant}`}
    >
      {content}
    </div>
  );
};
