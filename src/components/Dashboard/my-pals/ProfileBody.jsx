import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PalFollowers } from "./followers.jsx";
import { PalsFollowing } from "./following.jsx";
import { EcoPals } from "./ecoPals.jsx";
import { useDispatch, useSelector } from "react-redux";

export const ProfileProjects = () => {
  const [activeTab, setActiveTab] = useState("following"); // Default active tab is 'About'
  const myPals = useSelector((state) => state.ecoPals.pals);

  const myFollowingPals = useSelector((state) => state.ecoPals.following);

  const [searchInput, setSearchInput] = useState("");

  const filteredmyPals = myPals?.filter((data) =>
    data.full_name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="py-6 lg:py-4 w-full  bg-gray-50 font-montserrat ">
      <p className="mb-8 text-[18px]">Your PALs network</p>
      <div className="w-full flex gap-4 justify-between   sm:gap-10 text-sm border-b border-[#ACB2B0] cursor-pointer mb-6 ">
        <div className="flex gap-4 lg:gap-10">
          <p
            className={
              activeTab === "following"
                ? "text-black font-bold border-b-2 border-ecoGreen cursor-pointer pt-[10px] "
                : "text-gray-500 cursor-pointer  text-sm pt-[10px]"
            }
            onClick={() => setActiveTab("following")}
          >
            Following ({myFollowingPals?.length})
          </p>
          <p
            className={
              activeTab === "followers"
                ? "text-black font-bold border-b-2 border-ecoGreen cursor-pointer pt-[10px]"
                : "text-gray-500 cursor-pointer pt-[10px] "
            }
            onClick={() => setActiveTab("followers")}
          >
            Followers (11)
          </p>

          <p
            className={
              activeTab === "pals"
                ? "text-black font-bold border-b-2 border-ecoGreen cursor-pointer pt-[10px]"
                : "text-gray-500 cursor-pointer pt-[10px] "
            }
            onClick={() => setActiveTab("pals")}
          >
            EcoPals
          </p>
        </div>

        <div className="w-fit flex mb-2 items-center gap-4 px-4 py-2  bg-ecoLightGreen border  rounded-[6px]">
          <input
            placeholder="Search Pals"
            className="w-full  outline-none text-sm bg-ecoLightGreen"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <IoSearch className="text-ecoGreen text-[20px] font-bold" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {activeTab === "following" &&
          (myFollowingPals?.length == 0 ? (
            <p className="text-ecoGreen font-semibold">No PALs</p>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10">
              {myFollowingPals?.map((pal) => (
                <PalsFollowing pal={pal} />
              ))}
            </div>
          ))}
        {activeTab === "followers" && (
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="-mt-3">
              {/* {Community.map((com) => ( */}
              <PalFollowers follow={"request"} />
              <PalFollowers follow={"following"} />
              <PalFollowers follow={"request"} />
              <PalFollowers follow={"request"} />
              <PalFollowers follow={"following"} />
              <PalFollowers follow={"following"} />
              <PalFollowers follow={"notfollowing"} />
              <PalFollowers follow={"notfollowing"} />
              <PalFollowers follow={"notfollowing"} />
              <PalFollowers follow={"following"} />
              {/* ))} */}
            </div>
          </div>
        )}

        {activeTab === "pals" && (
          <div className="flex flex-col w-full gap-4">
            {filteredmyPals?.map((pal) => (
              <EcoPals pal={pal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
