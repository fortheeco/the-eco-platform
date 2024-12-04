import React from "react";
import { TierMemeberships } from "../data";
import { TierCard } from "./tierCard";

export default function TieredMembership({}) {
  return (
    <div className="w-[100%] relative h-full  mt-[3rem] font-nunito">
      <h1 className="text-center text-2xl font-semibold">
        Tiered Membership for Data Solutions
      </h1>
      <p className="text-center">
        Aliquam tellus hac commodo nunc sapien ultrices cum pharetra tincidunt.
        Eget phasellus tempor proin mi.
      </p>
      <div className="flex justify-center mt-8">
        <div className="border shadow-sm shadow-ecoGreen text-center grid grid-cols-2  rounded-2xl h-10 border-ecoGreen w-80">
          <div className="bg-white shadow-2xl  h-10 p-2 rounded-r-none rounded-2xl">
            monthly
          </div>
          <div className="bg-emerald-100 shadow-inner h-10 p-2 rounded-l-none rounded-2xl">
            Annual (20% off)
          </div>
        </div>
      </div>

      <div className="w-full justify-center sm:flex flex-row mt-8">
        <div className=" mt-4 justify-self-center ">
          <h1 className="border rounded-lg bg-[#D8F6E4] w-32  text-center">
            Account <p>Tiers</p>
          </h1>

          <ul className="mt-4 text-center">
            <li className="pt-14 ">Price</li>
            <li className="py-12">Access</li>
            <li className="py-8">Upload Capability</li>
          </ul>
        </div>
        <div className="grid justify-center md:grid-cols-4 sm:grid-cols-2  gap-4 ">
          {" "}
          {TierMemeberships.map((org) => (
            <TierCard
              title={org.title}
              head2={org.head2}
              Bgcolor={org.Bgcolor}
              text_color={org.text_color}
              head2_bg={org.head2_bg}
              bg={org.bg}
              Price={org.Price}
              Access={org.Access}
              UploadCapability={org.UploadCapability}
            />
          ))}
        </div>
      </div>
      <div className=" w-full flex justify-center  mb-96 mt-4">
        <div className="w-[80%] border p-2 rounded-lg bg-[#263238] grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-3 text-white">
            <p>Features</p>
          </div>
          <div className="col-end-9 col-span-2 text-ecoGreen">
            <button>Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
