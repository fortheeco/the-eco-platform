import React, { useEffect, useRef } from "react";
import "./eco.css"; // Import the CSS with the animation styles
import asiaasvg from "../../assets/SVG/asia.svg";
import northamericasvg from "../../assets/SVG/northamerica.svg";
import southamericasvg from "../../assets/SVG/southamerica.svg";
import africasvg from "../../assets/SVG/africasvg.svg";
import europesvg from "../../assets/SVG/europe.svg";
import antarticasvg from "../../assets/SVG/antartica.svg";

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = 200; // Adjust the scroll amount based on item width
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // Manually handle when we reach the end of the carousel and reset scroll
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth) {
        // If the scroll reaches the end, reset it back to the start
        carouselRef.current.scrollLeft = 0;
      }
    }
  };

  return (
    <div className="w-full relative mt-[8rem]">
      {/* Heading */}
      <h1 className="text-center font-nunito text-base md:text-5xl">
        ECO Data Center
      </h1>

      {/* Infinite Scroll Carousel */}
      <div className="w-full overflow-hidden relative mt-10">
        <ul
          ref={carouselRef}
          className="infinite-scroll flex items-center justify-start space-x-8"
          style={{
            whiteSpace: "nowrap",
            display: "flex",
            transition: "transform 1s ease-in-out", // smooth transition
          }}
          onScroll={handleScroll} // Check the scroll position to reset when at the end
        >
          {/* Carousel items */}
          <li className="inline-block text-center">
            <img
              src={asiaasvg}
              alt="Asia"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>Asia</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={northamericasvg}
              alt="North America"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>North America</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={southamericasvg}
              alt="South America"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>South America</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={africasvg}
              alt="Africa"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>Africa</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={europesvg}
              alt="Europe"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>Europe</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={antarticasvg}
              alt="Antarctica"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>Antarctica</p>
            <small>coming soon</small>
          </li>

          {/* Duplicate carousel items to create an infinite loop effect */}
          <li className="inline-block text-center">
            <img
              src={asiaasvg}
              alt="Asia"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>Asia</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={northamericasvg}
              alt="North America"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>North America</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={southamericasvg}
              alt="South America"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>South America</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={africasvg}
              alt="Africa"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>Africa</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={europesvg}
              alt="Europe"
              className="w-24 h-24 object-contain mb-2"
            />
            <p>Europe</p>
            <small>coming soon</small>
          </li>
          <li className="inline-block text-center">
            <img
              src={antarticasvg}
              alt="Antarctica"
              className="w-24 h-24 object-contain mb-2"
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
