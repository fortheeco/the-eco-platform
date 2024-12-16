import React from "react";

export default function () {
  return (
    <div className="font-nunito  absolute  bg-white shadow-xl border border-b-8 border-b-ecoGreen rounded-lg  w-[60%] sm:w-[45%]">
      <div className="flex gap-20 sm:gap-60 pt-2">
        <div>
          {" "}
          <h1 className="text-lg font-semibold">Nigeria</h1>
          <p className="ml-3 text-[#979797] text-sm">west Afica</p>
        </div>

        <div className="">
          <p className="text-ecoGreen underline underline-offset-[4px]">
            View Data
          </p>
        </div>
      </div>

      <div className="w-full ml-8 mt-2 pb-3 sm:pb-1">
        <ul className="sm:flex  sm:gap-6  sm:w-[93%] list-disc justify-items-start sm:justify-self-center text-ecoGreen">
          <li className="text-ecoGreen">
            <p className="text-black">Enviroment : 23,000</p>
          </li>
          <li className="text-ecoGreen pt-2 sm:pt-0">
            <p className="text-black">Community : 3,000</p>
          </li>
          <li className="text-ecoGreen pt-2 sm:pt-0">
            <p className="text-black">Organization : 300</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
