import React, { useState, useEffect, useRef } from "react";
import solvingIcon from "../../../../assets/new-landing/problem-solvingcon.png";
import sdgIcon from "../../../../assets/new-landing/sdg.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import {
  SdgGoals,
  EcoCategory,
  EnvironmentSdgGoals,
  CommunitySdgGoals,
  OrgSdgGoals,
} from "../../../data";
import { FaArrowLeftLong } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarDays } from "react-icons/fa6";
import api from "../../../../api/axios";

export const AddProject = () => {
  const [category, setCategory] = useState("Environment");
  const [sdggoals, setSdgGoals] = useState(SdgGoals);
  const [opengoal, setOpenGoal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [goal, setGoal] = useState({});
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    projectTitle: "",
    projectSponsor: "",
    projectDesc: "",
    location: "",
    number_of_people_required: null,
    projectSkills: [{}],
    startDate: "",
    duration: "",
    payment_type: "",
  });

  const datePickerRef = useRef(null);

  const handleOpenGoals = () => {
    setOpenGoal(!opengoal);
  };

  useEffect(() => {
    if (category == "Environment") {
      setSdgGoals(EnvironmentSdgGoals);
    }
    if (category == "Community") {
      setSdgGoals(CommunitySdgGoals);
    }
    if (category == "Organization") {
      setSdgGoals(OrgSdgGoals);
    }
  }, [category]);

  const handlePostProject = async () => {
    setLoading(true);

    const payload = {
      project_sponsor: data.projectSponsor,
      project_title: data.projectTitle,
      project_description: data.projectDesc,
      location: data.location,
      eco_category: category,
      unsd_goals: [goal?.name],
      // number_of_people_required: data.number_of_people_required,
      // required_skills: [{}],
      // task_start_date: data.startDate,
      // duration_in_weeks: -9223372036854776000,
      // payment_type: "fixed",
      // amount_per_person: "^-?\\(?:\\.\\)?$",
      // status: "currently_on",
    };

    try {
      // Post the form data to the server
      const response = await api.post("/organisation/add-projects/", payload);

      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  switch (step) {
    case 1:
      return (
        <div>
          <div className=" mx-auto p-8  md:w-[50%] xlg:w-[50%] rounded-[18px] z-10">
            <div className="w-full mb-6 flex justify-between items-center">
              <p className="text-[#041E0E] font-[500]">Add Project</p>
              <p className="text-[#606060] text-[12px]">Step 1/2</p>
            </div>{" "}
            <div>
              <p className="text-[#505050] text-[14px] font-[500]">
                Project Title
              </p>
              <input
                placeholder="Type your project title"
                className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-2 "
              />
            </div>
            <div>
              <p className="text-[#505050] mt-4 text-[14px] font-[500]">
                Project Sponsor
              </p>
              <input
                placeholder="Type your project title"
                className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-2 "
              />
            </div>
            {/*  */}
            <>
              <p className=" text-[#505050] mt-6 text-[14px] font-[500]">
                ECO Category
              </p>
              <ul className="grid  grid-cols-2 md:grid-cols-3 items-center gap-4 text-[12px] mt-2 mb-4">
                <li
                  className={`flex items-center gap-4 justify-center cursor-pointer ${
                    category === "Environment"
                      ? "bg-ecoGreen text-white px-2 py-3 rounded-md"
                      : "border border-[#505050] px-2 py-3 rounded-md"
                  }`}
                  onClick={() => {
                    setCategory("Environment");
                  }}
                >
                  <p
                    className={`w-2 h-2  rounded-full outline outline-[0.5px] outline-offset-4   ${
                      category === "Environment"
                        ? "bg-white outline-white"
                        : "outline-[#474747]"
                    }`}
                  ></p>{" "}
                  Environment
                </li>
                <li
                  className={`flex items-center gap-4 justify-center cursor-pointer ${
                    category === "Community"
                      ? "bg-ecoGreen text-white px-2 py-3 rounded-md"
                      : "border border-[#505050] px-2 py-3 rounded-md"
                  }`}
                  onClick={() => {
                    setCategory("Community");
                  }}
                >
                  {" "}
                  <p
                    className={`w-2 h-2  rounded-full outline outline-[0.5px] outline-offset-4   ${
                      category === "Community"
                        ? "bg-white outline-white"
                        : "outline-[#474747]"
                    }`}
                  ></p>{" "}
                  Community
                </li>
                <li
                  className={`flex items-center gap-4 justify-center cursor-pointer ${
                    category === "Organization"
                      ? "bg-ecoGreen text-white px-2 py-3 rounded-md"
                      : "border border-[#505050] px-2 py-3 rounded-md"
                  }`}
                  onClick={() => {
                    setCategory("Organization");
                  }}
                >
                  {" "}
                  <p
                    className={`w-2 h-2  rounded-full outline outline-[0.5px] outline-offset-4 ${
                      category === "Organization"
                        ? "bg-white outline-white"
                        : "outline-[#474747]"
                    }`}
                  ></p>{" "}
                  Organization
                </li>
              </ul>
            </>
            <>
              <p className="text-[#505050] mb-2  mt-6 text-[14px] font-[500]">
                UNSD Goals
              </p>
              <div
                onClick={() => {
                  handleOpenGoals();
                }}
                className="w-full  cursor-pointer flex gap-4 items-center px-4 py-1  relative border-[0.4px] border-[#2D2D2D] rounded-[6px]"
              >
                <img src={sdgIcon} alt="" className="w-[20px] h-[20px]" />
                <input
                  placeholder="Select UNSD goal"
                  className=" h-8 w-full outline-none text-sm "
                  value={goal ? goal.name : ""}
                  disabled={goal.name ? true : false}
                  onClick={() => {
                    handleOpenGoals();
                  }}
                />
                {opengoal ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown className="text-[20px]" />
                )}

                {opengoal ? (
                  <div className="absolute w-[12rem] overflow-y-auto h-[17rem] bg-inputBg right-2 mt-[20rem] p-2 rounded-sm border border-inputBorder">
                    {sdggoals?.map((goal, index) => (
                      <p
                        key={index}
                        className="py-2 text-sm font-[500] hover:bg-white hover:pl-2"
                        onClick={() => {
                          setGoal(sdggoals[index]);
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
            </>
            <div>
              <p className="mb-2 mt-6 text-[#505050] text-[14px] font-[500]">
                Project Description
              </p>
              <textarea
                name="text"
                id=""
                cols="10"
                rows="6"
                placeholder="Tell us about your project"
                className="w-full p-4 mt-2 bg-inputBg border border-[#263238] rounded-[12px] outline-none text-sm"
              ></textarea>

              <p className="mb-2 mt-4 text-[#505050] text-[14px] font-[500]">
                Location
              </p>
              <div className="w-full flex items-center px-4 py-2 mt-4 bg-inputBg border border-inputBorder rounded-[12px]">
                <input
                  placeholder="Location (City, State)"
                  className="w-full h-10 outline-none text-sm bg-inputBg"
                />
                {/* <div className="bg-ecoGreen p-2 rounded-full">
              <MdLocationOn className="text-white" />
            </div> */}
              </div>

              {/* <Link to={"/signup"}> */}
              <div
                onClick={() => {
                  setStep(2);
                }}
                className="bg-ecoGreen w-[40%] mx-auto text-white text-sm  p-4 text-center rounded-[12px] mt-4"
              >
                Proceed
              </div>

              <p className="text-[#474747] text-[10px] mt-6 text-center">
                © 2024 Eco Africa. All rights reserved.
              </p>
              {/* </Link> */}
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div>
          <div className=" mx-auto p-8  md:w-[50%] xlg:w-[50%] rounded-[18px] z-10">
            <div className="w-full mb-6 flex justify-between items-center">
              <p
                className="text-ecoGreen font-[500] text-[13px] flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                <FaArrowLeftLong />
                Back
              </p>
              <p className="text-[#606060] text-[12px]">Step {step}/2</p>
            </div>{" "}
            <div>
              <p className="text-[#505050] text-[14px] font-[500]">
                No of people required
              </p>
              <input
                placeholder="2"
                className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-2 "
              />
            </div>
            {/*  */}
            <div>
              <p className="text-[#505050] text-[14px] font-[500] mt-4">
                Project Skills
              </p>
              <input
                placeholder="Project Skills"
                className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-2 "
              />
            </div>
            {/*  */}
            <div className="w-full flex items-center gap-4 mt-5">
              <div className="w-full   text-[#505050] text-[14px] font-[500]">
                Start Date
                <div
                  onClick={() => datePickerRef.current.setFocus()}
                  className="w-full mt-1 outline-none text-sm cursor-pointer border-[0.5px] border-black px-2 py-4 rounded-md flex justify-between"
                >
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Choose a date"
                    className="bg-transparent outline-none"
                    ref={datePickerRef} // Attach the ref to DatePicker
                  />
                  <FaRegCalendarDays className="text-ecoGreen z-10" />
                </div>
              </div>

              <div className="w-full text-[#505050] text-[14px] font-[500]">
                Duration(weeks)
                <input
                  placeholder="12 weeks"
                  className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-1 "
                />
              </div>

              {/* {selectedDate && (
                <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
              )} */}
            </div>
            <div>
              <div className="w-full text-[#505050] text-[14px] mt-4 font-[500]">
                Specific requirements
                <input
                  placeholder="e.g Participants must have a mobile phone"
                  className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-1 "
                />
              </div>

              <div className="w-full text-[#505050] text-[14px] mt-4 font-[500]">
                Amount Per person
                <input
                  placeholder="N 12,000"
                  className="w-full  outline-none text-sm border-[0.5px] border-black px-2 py-4 rounded-md mt-1 "
                />
              </div>

              {/* <Link to={"/signup"}> */}
              <div
                onClick={() => {
                  setStep(2);
                }}
                className="text-ecoGreen w-[40%] mx-auto bg-white border border-ecoGreen text-sm  p-4 text-center rounded-[12px] mt-4"
              >
                Echo Project
              </div>

              <p className="text-[#474747] text-[10px] mt-6 text-center">
                © 2024 Eco Africa. All rights reserved.
              </p>
              {/* </Link> */}
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
