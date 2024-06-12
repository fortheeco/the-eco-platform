import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { layout, styles } from "../../style";
import { IoSearch } from "react-icons/io5";
import avatar1 from "../../assets/avatar/femaleBlack.svg";
import { Palsdata } from "./data";

export const PalsIndex = () => {
  const [searchInput, setSearchInput] = useState("");
  //   const [search, setSearch] = useState(false);

  const filteredPals = Palsdata.filter((data) =>
    data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="h-full relative w-full">
      <Nav />

      <section className={`${styles.sectionPT} mx-auto w-full pt-[10rem]  `}>
        <p className="text-[26px] text-center tracking-[2px]">PALs Network</p>

        <div className="bg-ecoGreen text-white text-[10px] ss:text-[14px] flex items-center justify-center gap-4 p-2 mt-6 mb-12">
          <p>You are currently an Eco Ambassador. Upgrade to become a leader</p>
          <p className="bg-ecoOrange p-2 rounded-md">Become a Leader</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="border border-[#979797] w-full ss:w-[70%] sm:w-[50%] rounded-md py-2 px-4 flex items-center gap-2 justify-between">
            <p className="font-light md:text-[14px] text-[11px]">
              Search for PALs
            </p>
            <input
              placeholder="Name"
              className="w-[65%] lg:w-[75%] outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <IoSearch />
          </div>

          <div className="text-white bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer hidden sm:block">
            Search PALs Network
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPals.map((data) => {
            return <PalsCard data={data} />;
          })}
        </div>
      </section>
    </div>
  );
};

const PalsCard = ({ data }) => {
  return (
    <div className="border border-[#979797] p-4 rounded-lg" key={data.index}>
      <div className="flex items-center gap-2">
        <img src={avatar1} alt="" className="w-[50px]" />
        <div>
          <p className=" text-[14px]">{data.name}</p>
          <p className="font-light mt-1 text-[13px]">Leader</p>
        </div>
      </div>
      <p className="font-light mt-2 text-[13px]">{data.desc}</p>

      <div className="mt-4 font-light text-[12px] flex gap-2">
        {data.skills.map((skill, index) => (
          <p key={index} className="bg-ecoLightGreen p-1">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};
