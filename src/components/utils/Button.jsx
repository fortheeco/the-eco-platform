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

export const PrimaryBtn = ({ content, variant, type }) => {
  return (
    <button
      type={type}
      className={`capitalize bg-ecoGreen text-white py-3 flex items-center justify-center rounded-full text-lg px-10 focus-within:outline-ecoGreen focus-within:outline-2 focus-within:shadow-lg focus-within:rounded-lg focus-within:bg-ecoGreen/70 transition-all ${variant}`}
    >
      {content}
    </button>
  );
};
