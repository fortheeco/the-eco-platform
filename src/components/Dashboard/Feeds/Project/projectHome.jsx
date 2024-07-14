import React, { useState, useEffect } from "react";
import { AllProjects } from "./Projects";
import { ProjectDetail } from "./ProjectDetail";
import api from "../../../../api/axios";

export const ProjectHome = () => {
  const [problems, setProblems] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([{}, {}, {}]);
  const [ImgData, setImgData] = useState(["", "", ""]);

  const [goal, setGoal] = useState({});
  const [category, setCategory] = useState({});
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [loadingFetch, setLoadingFetch] = useState(false);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoadingFetch(true);
  //       try {
  //         const response = await api.get("/problems/");

  //         console.log(response.data.results);
  //         setProblems(response.data.results);

  //         setLoadingFetch(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchData();
  //   }, [isLoading]);

  return (
    <div className="h-full w-full ">
      <div className=" w-full flex justify-end pt-4">
        <p className="bg-ecoGreen text-sm text-white px-6 py-2 rounded-lg cursor-pointer w-fit">
          Apply to project
        </p>
      </div>
      <div className="  h-full flex w-full gap-5">
        <div className="h-[600px] overflow-y-auto  w-[40%]">
          <AllProjects
          //  problems={problems} loadingFetch={loadingFetch}
          />
        </div>
        <div className="h-[600px] overflow-y-auto  w-[60%]">
          <div className=" h-fit">
            <ProjectDetail
            // handlePostProblem={handlePostProblem}
            // setImgData={setImgData}
            // ImgData={ImgData}
            // selectedFiles={selectedFiles}
            // setSelectedFiles={setSelectedFiles}
            // goal={goal}
            // setGoal={setGoal}
            // category={category}
            // setCategory={setCategory}
            // location={location}
            // description={description}
            // setLocation={setLocation}
            // setDescription={setDescription}
            // setIsLoading={setIsLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
