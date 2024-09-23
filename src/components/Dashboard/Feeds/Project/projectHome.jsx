import React, { useState, useEffect } from "react";
import { AllProjects } from "./Projects";
import { ProjectDetail } from "./ProjectDetail";
import api from "../../../../api/axios";
import { IoSearch } from "react-icons/io5";
import {
  fetchProjects,
  fetchprojectDetails,
} from "../../../../appRedux/actions/projects";
import { useDispatch } from "react-redux";
import Globe from "../../../../assets/dashboard/profile/globe.svg";
import { FaArrowLeft } from "react-icons/fa6";

export const ProjectHome = () => {
  const dispatch = useDispatch();
  const [problems, setProblems] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([{}, {}, {}]);
  const [ImgData, setImgData] = useState(["", "", ""]);

  const [goal, setGoal] = useState({});
  const [category, setCategory] = useState({});
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [viewProjectDetails, setViewProjectDetails] = useState(false);

  const [loadingFetch, setLoadingFetch] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const handleFetchDetails = (id) => {
    setViewProjectDetails(true);
    dispatch(fetchprojectDetails(id));
  };

  return (
    <div className="h-full w-full ">
      <div className="pt-4 flex w-full items-center cursor-pointer text-ecoGreen text-[14px] font-bold">
        {viewProjectDetails && (
          <p
            className="md:hidden w-full flex items-center gap-1"
            onClick={() => {
              setViewProjectDetails(false);
            }}
          >
            <FaArrowLeft /> Go Back
          </p>
        )}
        <div className=" w-full flex justify-end  items-center gap-6">
          <IoSearch className="font-bold text-[18px]" />
          <p className="bg-ecoGreen text-sm text-white px-6 py-2 rounded-lg cursor-pointer w-fit">
            Echo project
          </p>
        </div>
      </div>

      <div className="  h-full flex w-full gap-5 flex-col md:flex-row">
        <div className="md:h-[600px] overflow-y-auto hidden md:block md:w-[40%]">
          <AllProjects
            setViewProjectDetails={setViewProjectDetails}
            viewProjectDetails={viewProjectDetails}
            handleFetchDetails={handleFetchDetails}
          />
        </div>

        {!viewProjectDetails && (
          <div className="md:h-[600px] overflow-y-auto md:hidden md:w-[40%]">
            <AllProjects
              setViewProjectDetails={setViewProjectDetails}
              viewProjectDetails={viewProjectDetails}
              handleFetchDetails={handleFetchDetails}
            />
          </div>
        )}

        {!viewProjectDetails && (
          <div className="h-[600px] ml-20 overflow-y-auto hidden md:block w-[60%]">
            <img src={Globe} alt="" className="w-full" />
          </div>
        )}
        {viewProjectDetails && (
          <div className="h-[600px] overflow-y-auto  md:w-[60%] w-full">
            <div className=" h-fit">
              <ProjectDetail
                setViewProjectDetails={setViewProjectDetails}
                viewProjectDetails={viewProjectDetails}
                handleFetchDetails={handleFetchDetails}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
