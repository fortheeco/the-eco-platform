import React, { useRef, useState } from "react";
import "./eco.css"; // Import the CSS with the animation styles
import asiaasvg from "../../assets/SVG/asia.svg";
import northamericasvg from "../../assets/SVG/northamerica.svg";
import southamericasvg from "../../assets/SVG/southamerica.svg";
import africasvg from "../../assets/SVG/africasvg.svg";
import europesvg from "../../assets/SVG/europe.svg";
import antarticasvg from "../../assets/SVG/antartica.svg";
import { Community } from "../Home/community";

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const handlePointerEnter = () => {
    setIsHovered(true); // Set the hover state to true when pointer enters
  };

  const handlePointerLeave = () => {
    setIsHovered(false); // Set the hover state to false when pointer leaves
  };

  const Handlethus = () => {
    return <Community />;
  };

  return (
    <div className="w-full relative mt-[8rem]">
      {/* Heading */}
      <h1 className="text-center font-nunito text-base md:text-5xl">
        ECO Data Center
      </h1>

      {/* Scrollable Carousel */}
      <div className="w-full mt-10 overflow-x-auto sm:justify-items-center no-scrollbar">
        <ul
          ref={carouselRef}
          className="flex items-center space-x-16"
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            padding: "10px 0",
          }}
        >
          {/* Carousel items */}
          <li
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            className="inline-block text-center pl-10"
          >
            <img
              src={asiaasvg}
              alt="Asia"
              className="w-24 sm:w-48 sm object-contain   mb-2"
            />
            {isHovered && <Community />}
            {/* ill come back to fix this  */}
            <p>Asia</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={northamericasvg}
              alt="North America"
              className="w-24 sm:w-36 object-contain mb-2"
            />
            <p>North America</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={southamericasvg}
              alt="South America"
              className="w-24 sm:w-28 object-contain mb-2"
            />
            <p>South America</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={africasvg}
              alt="Africa"
              className="w-24 sm:w-36 object-contain mb-2"
            />
            <p>Africa</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={europesvg}
              alt="Europe"
              className="w-24 sm:w-44 object-contain mb-2"
            />
            <p>Europe</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={antarticasvg}
              alt="Antarctica"
              className="w-24 sm:w-40 object-contain mb-2"
            />
            <p>Antarctica</p>
            <small>coming soon</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
