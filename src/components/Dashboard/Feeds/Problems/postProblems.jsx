import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import sdgIcon from "../../../../assets/new-landing/sdg.svg";
import { AiFillPicture } from "react-icons/ai";
import { SdgGoals, EcoCategory } from "../../../data";

export const PostProblems = (props) => {
  const [opengoal, setOpenGoal] = useState(false);
  const [opencategory, setOpenCategory] = useState(false);

  const handleOpenGoals = () => {
    setOpenGoal(!opengoal);
  };
  const handleOpenCategories = () => {
    setOpenCategory(!opencategory);
  };

  const onFileLoad = (event, index) => {
    const file = event.target.files[0];

    const newSelectedFiles = [...props.selectedFiles];

    newSelectedFiles[index] = file;

    props.setSelectedFiles(newSelectedFiles);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newPdfData = [...props.ImgData];
      newPdfData[index] = reader.result;
      props.setImgData(newPdfData);
    };
  };

  return (
    <div className="w-full px-2 pt-8 sm:pt-12 font-montserrat">
      <div className="w-full  rounded-[12px] fullBox-shadow bg-[#fff]">
        <div className="w-full p-4 lg:p-8 flex flex-col">
          <div className="relative flex items-center gap-2">
            <p
              onClick={() => {
                handleOpenCategories();
              }}
              className="bg-ecoGreen text-[14px] sm:text-[16px] cursor-pointer text-white font-light w-fit px-4 py-1 rounded-md flex gap-6 items-center"
            >
              ECO category
              {opencategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>{" "}
            :{" "}
            <p className="ml-1 text-[12px] sm:text-sm font-bold sm:font-normal text-ecoGreen">
              {" "}
              {props.category.name}
            </p>
            {opencategory ? (
              <div className="absolute w-[10rem] py-2 bg-inputBg left-[10%] mt-[11rem] p-2 border border-inputBorder rounded-sm">
                {EcoCategory.map((category, index) => (
                  <p
                    key={index}
                    className="py-2 text-sm font-[500] hover:bg-white hover:pl-2"
                    onClick={() => {
                      props.setCategory(EcoCategory[index]);
                      handleOpenCategories();
                    }}
                  >
                    {category.name}
                  </p>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>

          <textarea
            name="text"
            id=""
            cols="10"
            rows={`${props.description ? "3" : "2"} `}
            placeholder="Your Eco Problem"
            className="w-full sm:hidden  mt-8  rounded-md outline-none text-sm"
            value={props.description}
            onChange={(e) => props.setDescription(e.target.value)}
          ></textarea>

          <textarea
            name="text"
            id=""
            cols="10"
            rows={`${props.description ? "6" : "2"} `}
            placeholder="Your Eco Problem"
            className="w-full hidden sm:block  mt-8  rounded-md outline-none text-sm"
            value={props.description}
            onChange={(e) => props.setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="px-8 w-full">
          {props.selectedFiles.length > 0 ? (
            <div className="flex gap-1 items-center w-full">
              {props.ImgData[0] && (
                <img
                  src={props.ImgData[0]}
                  alt=""
                  className="h-[6rem] w-1/6 object-contain"
                />
              )}
              {props.ImgData[1] && (
                <img
                  src={props.ImgData[1]}
                  alt=""
                  className="h-[6rem] w-1/6 object-contain"
                />
              )}
              {props.ImgData[2] && (
                <img
                  src={props.ImgData[2]}
                  alt=""
                  className="h-[6rem] w-1/6 object-contain"
                />
              )}
              {/* {props.selectedFiles[1].name ? ( */}
              {/* <img src={props.ImgData[1]} alt="" className="h-[6rem]  w-1/4" />
              <img src={props.ImgData[2]} alt="" className="h-[6rem]  w-1/4" /> */}
              {/* ) : (
                <></>
              )
              } */}
              {(props.ImgData[0] && !props.ImgData[2]) ||
              (props.ImgData[0] && !props.ImgData[1]) ? (
                <div>
                  <input
                    type="file"
                    //   id={`${props.ImgData[1] ? `fileInput2` : `fileInput1`} `}
                    id={`fileInput1`}
                    accept=".png,.jpg,.jpeg"
                    onChange={(event) => {
                      props.ImgData[1]
                        ? onFileLoad(event, 2)
                        : onFileLoad(event, 1);
                    }}
                    style={{
                      display: "none",
                    }}
                  />
                  <label htmlFor={`fileInput1`}>
                    <div className="bg-[rgb(29,181,89,0.4)] py-1 px-2 sm:px-8 text-[11px] sm:text-sm rounded-sm cursor-pointer">
                      Click to add more images
                    </div>
                  </label>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="w-full  flex flex-col lg:flex-row sm:justify-between gap-4 lg:gap-0 sm:items-center border-t px-4 lg:px-0 pt-4 lg:pr-4 pb-8 border-t-gray-300">
          <div className="w-full lg:w-[40%] flex gap-4 items-center px-4 py-1  bg-white border-[0.4px] border-[#2D2D2D] rounded-[6px]">
            <MdLocationOn className="" />
            <input
              placeholder="Location (City, State)"
              className=" h-8 outline-none text-sm "
              value={props.location}
              onChange={(e) => props.setLocation(e.target.value)}
            />
          </div>

          <div
            onClick={() => {
              handleOpenGoals();
            }}
            className="w-full lg:w-[40%] cursor-pointer flex gap-4 items-center px-4 py-1  relative border-[0.4px] border-[#2D2D2D] rounded-[6px]"
          >
            <img src={sdgIcon} alt="" className="w-[20px] h-[20px]" />
            <input
              placeholder="Select UNSD goal"
              className=" h-8 w-full outline-none text-sm "
              value={props.goal ? props.goal.name : ""}
              disabled={true}
            />
            {opengoal ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown className="text-[20px]" />
            )}

            {opengoal ? (
              <div className="absolute w-[12rem] overflow-y-auto h-[17rem] bg-inputBg right-2 mt-[20rem] p-2 rounded-sm border border-inputBorder">
                {SdgGoals.map((goal, index) => (
                  <p
                    key={index}
                    className="py-2 text-sm font-[500] hover:bg-white hover:pl-2"
                    onClick={() => {
                      props.setGoal(SdgGoals[index]);
                    }}
                  >
                    {goal.name}
                  </p>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* Upload images */}
          <div className="flex gap-2 items-center w-full lg:hidden">
            {props.ImgData[0] ? (
              <></>
            ) : (
              <div>
                {" "}
                <input
                  type="file"
                  id={`fileInput0`}
                  accept=".png,.jpg,.jpeg"
                  onChange={(event) => {
                    onFileLoad(event, 0);
                  }}
                  style={{
                    display: "none",
                  }}
                />
                <label htmlFor={`fileInput0`}>
                  <AiFillPicture className="text-[24px] cursor-pointer" />
                </label>
              </div>
            )}

            <div
              onClick={() => {
                props.handlePostProblem();
              }}
              className={`${
                !props.location || !props.description
                  ? "cursor-not-allowed bg-[rgb(29,181,89,0.4)]"
                  : "bg-ecoGreen cursor-pointer text-white"
              }  py-2 px-8 text-sm rounded-sm cursor-pointer w-full text-center`}
            >
              EcHo
            </div>
          </div>

          {/* Desktop */}
          {props.ImgData[0] ? (
            <></>
          ) : (
            <div className="hidden lg:flex">
              {" "}
              <input
                type="file"
                id={`fileInput0`}
                accept=".png,.jpg,.jpeg"
                onChange={(event) => {
                  onFileLoad(event, 0);
                }}
                style={{
                  display: "none",
                }}
              />
              <label htmlFor={`fileInput0`}>
                <AiFillPicture className="text-[20px] cursor-pointer" />
              </label>
            </div>
          )}

          <div
            onClick={() => {
              props.handlePostProblem();
            }}
            className={`${
              !props.location || !props.description
                ? "cursor-not-allowed bg-[rgb(29,181,89,0.4)]"
                : "bg-ecoGreen cursor-pointer text-white"
            }  py-1 px-8 text-sm rounded-sm cursor-pointer hidden lg:flex`}
          >
            EcHo
          </div>
        </div>
      </div>
    </div>
  );
};
