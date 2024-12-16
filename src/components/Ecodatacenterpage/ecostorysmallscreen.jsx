import React, { useState, useEffect } from "react";
import { ORGANIZATIONS_EcoDataCenter } from "../data";
import { OrgCard_EcoDataCenter } from "../Home/Org";

export default function Ecostorysmallscreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of slides
  const totalSlides = 2;

  // Function to handle the 'Next' button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to handle the 'Previous' button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Function to handle the 'Slide to' button click
  const handleSlideTo = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds auto-slide

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="block sm:hidden">
        <div
          id="default-carousel"
          className="relative w-full mt-16"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative overflow-hidden rounded-lg md:h-96">
            {/* Slide 1 */}
            <div
              className={`${
                currentIndex === 0 ? "block" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <div className=" justify-self-center  w-[80%] h-full">
                {/* First Card Content */}
                <div className=" ml-6   font-nunito">
                  <li className=" font-semibold mb-2 text-sm">
                    Transportation
                  </li>
                  <p className="ml-6 font-semibold text-lg">
                    The Lagos red rail line impact
                  </p>
                </div>

                <div className="pt-3 italic ">
                  <p className=" font-normal mb-2  text-sm">
                    Echoed from Lagos, Nigeria
                  </p>
                  <p className=" mb-3 font-normal text-ecoGreen text-sm">
                    50 ECO Points
                  </p>
                </div>

                <div className="w-[100%] h-60 rounded-lg">
                  <img
                    className="w-full h-full rounded-lg"
                    src="src\assets\EcoDataCenter\ecostory.png"
                  />
                </div>

                <div className="mt-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3  sm:w-[80%]   mx-0 md:mx-auto  gap-8 ">
                    {ORGANIZATIONS_EcoDataCenter.map((org) => (
                      <OrgCard_EcoDataCenter
                        title={org.title}
                        description={org.description}
                        text1={org.text1}
                        text2={org.text2}
                        imgBgColor={org.imgBgColor}
                        imgUrl={org.imgUrl}
                        bg={org.bg}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-10 justify-self-center text-white w-36 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer ">
                  <button>View Data set</button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className={`${
                currentIndex === 1 ? "block" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <div className=" justify-self-center  w-[80%] h-full">
                {/* First Card Content */}
                <div className=" ml-6   font-nunito">
                  <li className=" font-semibold mb-2 text-sm">
                    Transportation
                  </li>
                  <p className="ml-6 font-semibold text-lg">
                    The Lagos red rail line impact
                  </p>
                </div>

                <div className="pt-3 italic ">
                  <p className=" font-normal mb-2  text-sm">
                    Echoed from Lagos, Nigeria
                  </p>
                  <p className=" mb-3 font-normal text-ecoGreen text-sm">
                    50 ECO Points
                  </p>
                </div>

                <div className="w-[100%] h-60 rounded-lg">
                  <img
                    className="w-full h-full rounded-lg"
                    src="src\assets\EcoDataCenter\ecostory.png"
                  />
                </div>

                <div className="mt-10">
                  <div className="grid grid-cols-1 sm:grid-cols-3  sm:w-[80%]   mx-0 md:mx-auto  gap-8 ">
                    {ORGANIZATIONS_EcoDataCenter.map((org) => (
                      <OrgCard_EcoDataCenter
                        title={org.title}
                        description={org.description}
                        text1={org.text1}
                        text2={org.text2}
                        imgBgColor={org.imgBgColor}
                        imgUrl={org.imgUrl}
                        bg={org.bg}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-10 justify-self-center text-white w-36 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer ">
                  <button>View Data set2</button>
                </div>
              </div>
            </div>
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 mt-14 left-1/2 space-x-3 rtl:space-x-reverse">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-ecoGreen" : "bg-gray-500"
                }`}
                aria-current={currentIndex === index ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleSlideTo(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
