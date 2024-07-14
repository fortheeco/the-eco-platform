import React, { useState, useEffect } from "react";
import { PostProblems } from "./postProblems";
import { SingleProject } from "./singleProject";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/problems/");

        console.log(response.data.results);
        setProblems(response.data.results);
        // console.log(response.data);
        //  setData(response.data);
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

    const payload = {
      title: category.name,
      content: description,
      location: location,
      category_id: category.id,
      goal_id: goal.id,
      images: [
        { image: ImgData[0] },
        { image: ImgData[1] },
        { image: ImgData[2] },
      ],
    };

    try {
      const res = await api.post("/create_problem/", payload);
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      //  setStep(2);
      console.log(error);
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
          <SingleProject problems={problems} />
        </div>
      </div>

      <div>
        <LatestProjectNew />
      </div>
    </div>
  );
};
