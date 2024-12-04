import React from "react";
import "./chat.css";
import micsvg from "../../assets/mic.svg";
import ecoiconvg from "../../assets/ecoicon.svg";
import arrowdiagonal from "../../assets/arrowdiagonal.svg";
import imagesvg from "../../assets/image.svg";
import threedotssvg from "../../assets/threedotsicon.svg";
import multipleiconsvg from "../../assets/multipleicon.svg";
import { useState } from "react";

export default function Chatsection() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      {" "}
      <div className=" w-full flex sm:w-[90%] mx-auto relative justify-center items-center  ">
        <div className="w-[120%]  -ml-14   border-black border rounded-lg sm:-ml-36 h-full pb-2 bg-white">
          <div className="grid bg-[#D8F6E4] rounded-b-none rounded-lg grid-cols-3 p-4 gap-4">
            <div className="w-48 text-sm sm:text-lg  ">
              The project title name
            </div>
            <div className="font-montserrat font-semibold  -mr-[70%]   justify-self-end">
              <img className="w-16" src={multipleiconsvg} />
              <p className="text-sm sm:text-base">+4 others</p>
            </div>
            <div className="ml-[80%] ">
              <img className="w-6 cursor-pointer" src={threedotssvg} />
            </div>
            <div className="-mt-8 w-44 flex  items-center justify-start text-sm sm:text-md">
              <img className=" w-6 pr-2" src={ecoiconvg} />
              <div>Bangman Group</div>
            </div>
          </div>
          <div className="w-full grid justify-items-center">
            <div className="w-[90%] h-[250px] overflow-y-auto hide-scrollbar pt-24">
              <div className="mb-12 justify-self-start">
                <div className="  -mb-20">
                  <img className="" src={imagesvg} />
                </div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-10">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs items-end">17:59</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-[150px] text-xs items-end">17:59</sm>
              </div>
              <div className="mb-12  justify-self-start">
                <div className=" -mb-20">
                  <img className="" src={imagesvg} />
                </div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-10">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
              <div className="mb-12 justify-self-start">
                <div className=" -mb-20">jj</div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
              <div className="mb-12 justify-self-start">
                <div className=" -mb-20">jj</div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
              <div className="mb-12 justify-self-start">
                <div className=" -mb-20">jj</div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
              <div className="mb-12 justify-self-start">
                <div className=" -mb-20">jj</div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
              <div className="mb-12 justify-self-start">
                <div className=" -mb-20">jj</div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
              <div className="mb-12 justify-self-start">
                <div className=" -mb-20">jj</div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
              <div className="mb-12 justify-self-start">
                <div className=" -mb-20">jj</div>
                <div className="bg-[#1DB559] w-44  p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF]  text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-6 text-xs ">t</sm>
              </div>
              <div className="mb-12  justify-self-end ">
                <div className="bg-[#1DB559] w-44 p-3  border rounded-lg ml-6">
                  <h1 className="text-[#FFFFFF] text-base">John Doe</h1>
                  <p className="text-[#FFFFFF] text-sm">
                    Hi, Good Morning. Thanks for reaching out.
                  </p>
                </div>
                <sm className="p-3 ml-44 text-xs items-end">t</sm>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-2">
            <div className="border h-10 border-[#979797]  bg-[#D7F3E2]  w-[87%] rounded-md py-2 px-4 flex items-center gap-2 justify-between">
              <div className="border-r border-solid border-black">
                <img className="pr-2 cursor-pointer" src={imagesvg} />
              </div>
              <input
                placeholder="Type your message..."
                className="w-[100%] bg-[#D7F3E2]  lg:w-[100%] outline-none"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <img className="w-5" src={micsvg} />
            </div>

            <div className="text-white w-10  bg-ecoGreen p-2 rounded-md  cursor-pointer hidden sm:block">
              <img src={arrowdiagonal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
