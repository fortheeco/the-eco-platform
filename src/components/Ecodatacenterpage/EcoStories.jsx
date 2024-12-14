import React from "react";
import Ecostorybigscreen from "./ecostorybigscreen";
import Ecostorysmallscreen from "./ecostorysmallscreen";

export default function EcoStories() {
  // State to track the current slide index

  return (
    <>
      <div className="font nunito">
        <h1 className="text-center text-2xl font-medium">Eco Stories</h1>
        <p className="text-center">
          Some of the datasets we have worked on and has satisfied quality
          checks
        </p>
        <Ecostorybigscreen />
        <Ecostorysmallscreen />
      </div>
    </>
  );
}
