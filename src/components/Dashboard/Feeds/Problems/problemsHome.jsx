import React from "react";
import { PostProblems } from "./postProblems";
import { SingleProject } from "./singleProject";
import { LatestProjectNew } from "./latest";

export const ProblemsHome = () => {
  return (
    <div className="  h-full flex w-full gap-10">
      <div className="h-[600px] overflow-y-auto  w-[80%]">
        <div className=" h-fit">
          <PostProblems />
          <SingleProject />
        </div>
      </div>

      <div>
        <LatestProjectNew />
      </div>
    </div>
  );
};
