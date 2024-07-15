import React, { useState, useEffect } from "react";
import { PostProblems } from "./postProblems";
import { SingleProblem } from "./singleProblem";
import { LatestProjectNew } from "./latest";
import api from "../../../../api/axios";

export const ProblemsHome = () => {
  const [problems, setProblems] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([{}, {}, {}]);
  const [ImgData, setImgData] = useState(["", "", ""]);

  const [goal, setGoal] = useState({});
  const [category, setCategory] = useState({});
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [loadingFetch, setLoadingFetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingFetch(true);
      try {
        const response = await api.get("/problems/");

        console.log(response.data.results);
        setProblems(response.data.results);
        // console.log(response.data);
        //  setData(response.data);
        setLoadingFetch(false);
      } catch (error) {
        //  setError(error);
        console.log(error);
      }
    };

    fetchData();
  }, [isLoading]);

  const handlePostProblem = async () => {
    console.log("I want to make a post");
    setIsLoading(true);

    // Prepare the images array
    const imagesArray = selectedFiles.map((file) => {
      return { image: file }; // Use the file name as a placeholder
    });

    // Create the FormData object
    const formData = new FormData();

    // Append each file to formData
    selectedFiles.forEach((file, index) => {
      formData.append(`images`, file);
    });

    formData.append("content", description);
    formData.append("title", goal.name);
    formData.append("location", location);
    formData.append("category_id", category.id);
    formData.append("goal_id", goal.id);

    try {
      // Post the form data to the server
      const response = await api.post("/create_problem/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  console.log(selectedFiles);

  return (
    <div className="  h-full flex w-full gap-10">
      <div className="h-[600px] overflow-y-auto  w-[80%]">
        <div className=" h-fit">
          <PostProblems
            handlePostProblem={handlePostProblem}
            setImgData={setImgData}
            ImgData={ImgData}
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
            goal={goal}
            setGoal={setGoal}
            category={category}
            setCategory={setCategory}
            location={location}
            description={description}
            setLocation={setLocation}
            setDescription={setDescription}
            setIsLoading={setIsLoading}
          />
          <SingleProblem problems={problems} loadingFetch={loadingFetch} />
        </div>
      </div>

      <div>
        <LatestProjectNew />
      </div>
    </div>
  );
};
