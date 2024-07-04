import React from "react";

export const CommunityCard = ({
  state,
  imgUrl,
  moreUrl,
  description,
  label,
  value,
  time,
  goal,
  goalLabel,
}) => {
  return (
    <div className="bg-white rounded-lg mt-4 px-4 py-10">
      <div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 border-b border-[#979797] pb-4">
          <div className="flex items-center gap-2">
            <img src={imgUrl} alt="location-svg" className="w-6 h-6" />
            <p className="text-sm sm:text-base text-[#263238]">{state}</p>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <p className="text-sm sm:text-base text-[#263238]">{label}:</p>
            <p className="text-sm sm:text-base text-[#429DD7]">{value}</p>
          </div>
          <img src={moreUrl} alt="more svg" className="w-6 h-6" />
        </div>
        <div className="mt-4">
          <p className="text-sm text-[#3D433F]">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <div className="flex bg-[#1DB559] w-full sm:w-1/2 p-2 rounded-md text-white items-center justify-between">
            <p className="text-sm sm:text-base">{goal}</p>
            <p className="text-sm sm:text-base">{goalLabel}</p>
          </div>
          <div className="mt-4 sm:mt-0 text-sm sm:text-base text-[#263238]">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};
