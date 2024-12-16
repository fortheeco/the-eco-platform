import React, { useState } from "react";
import { TierMemeberships, TierMemeberships2 } from "../data";
import { TierCard, TierCard2 } from "./tierCard";

export default function TieredMembership({}) {
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState("show more");

  const handleClick = () => {
    setDisplay((prevState) => !prevState);
    setShow((prevState) =>
      prevState === "Show more" ? "Show less" : "Show more"
    );
  };

  return (
    <div className="w-[100%] relative h-full  mt-[6rem] font-nunito">
      <h1 className="text-center text-2xl font-semibold">
        Tiered Membership for Data Solutions
      </h1>
      <p className="text-center">
        Aliquam tellus hac commodo nunc sapien ultrices cum pharetra tincidunt.
        Eget phasellus tempor proin mi.
      </p>
      <div className="flex justify-center mt-8">
        <div className="border shadow-sm shadow-ecoGreen text-center grid grid-cols-2 rounded-2xl h-10 border-ecoGreen w-80">
          <div className="bg-white shadow-2xl h-10 p-2 rounded-r-none rounded-2xl">
            monthly
          </div>
          <div className="bg-emerald-100 shadow-inner h-10 p-2 rounded-l-none rounded-2xl">
            Annual (20% off)
          </div>
        </div>
      </div>

      <div className="w-full justify-center sm:flex flex-row mt-8">
        <div className=" mt-4 hidden sm:block justify-self-center ">
          <h1 className="border rounded-lg bg-[#D8F6E4] w-32 text-center">
            Account <p>Tiers</p>
          </h1>

          <ul className="mt-4 text-center">
            <li className="pt-14 ">Price</li>
            <li className="py-12">Access</li>
            <li className="py-8">Upload Capability</li>
          </ul>
        </div>

        <div className="grid justify-items-center sm:grid-cols-4 gap-4">
          {TierMemeberships.map((org) => (
            <TierCard
              key={org.title} // Added key prop for better list rendering
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

        <div className="grid justify-items-center sm:grid-cols-4 gap-4">
          {TierMemeberships2.map((org) => (
            <TierCard2
              key={org.title} // Added key prop for better list rendering
              title={org.title}
              head2={org.head2}
              extratext1={org.extratext1}
              extratext2={org.extratext2}
              extratext3={org.extratext3}
              extratext4={org.extratext4}
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

      {/* Feature details with "Show More" button */}
      <div className="w-full sm:mb-96  mb-40">
        <div className="w-full sm:flex justify-center hidden mt-4">
          <div className="w-[80%] border p-2 rounded-lg bg-[#263238] grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-3 text-white">
              <p>Features</p>
            </div>
            <div className="col-end-9 col-span-2 text-ecoGreen">
              <button onClick={handleClick}>{show}</button>
            </div>
          </div>
        </div>
        <div className="w-[100%] hidden sm:block justify-self-center ">
          {display && (
            <div className="w-[63%] -ml-[4%] gap-10 justify-self-center justify-items-center sm:grid-cols-5 hidden sm:grid">
              <div className=" mt-4 -mr-[7%] hidden sm:block justify-self-center ">
                <h1 className="border rounded-lg bg-[#D8F6E4] w-32 text-center">
                  Account <p>Tiers</p>
                </h1>

                <ul className="mt-4 text-center">
                  <li className="pt-14 ">Price</li>
                  <li className="py-12">Access</li>
                  <li className="py-8">Upload Capability</li>
                </ul>
              </div>
              {TierMemeberships.map((org) => (
                <TierCard
                  key={org.title} // Added key prop for better list rendering
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
          )}
        </div>
      </div>
    </div>
  );
}
