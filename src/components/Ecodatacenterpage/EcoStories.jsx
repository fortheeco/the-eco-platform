import React, { useState, useEffect } from "react";
import { ORGANIZATIONS_EcoDataCenter } from "../data";
import { OrgCard_EcoDataCenter } from "../Home/Org";

export default function EcoStories() {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of slides
  const totalSlides = 2; // We now have 2 slides, one for each card

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
    }, 3000); // 3 seconds auto-slide

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Run only on component mount

  return (
    <div
      id="default-carousel"
      className="relative w-full mt-16"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Slide 1: Hello World */}
        <div
          className={`${
            currentIndex === 0 ? "block" : "hidden"
          } duration-700 ease-in-out`}
          data-carousel-item
        >
          <div className="flex items-center justify-center w-full h-full ">
            {/* First Card: Hello World */}
            <div className="w-full flex justify-center font-nunito md:h-96">
              <div class="grid border w-[90%] border-black rounded-lg grid-cols-3 gap-4 ">
                <div className="...">
                  <img
                    className="w-50 h-96"
                    src="src\assets\EcoDataCenter\ecostory.png"
                  />
                </div>
                <div className="pt-3 md:-ml-16">
                  <li className=" font-normal text-sm">Transportation</li>
                  <p className=" font-semibold text-lg">
                    The Lagos red rail line impact
                  </p>
                </div>
                <div className="pt-3 italic md:ml-36">
                  <p className=" font-normal  text-sm">
                    Echoed from Lagos, Nigeria
                  </p>
                  <p className=" font-normal text-ecoGreen text-sm">
                    50 ECO Points
                  </p>
                </div>
                <div className="col-end-4 md:-ml-24  -mt-80 col-span-2 ...">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:w-[90%]   mx-0 md:mx-auto  gap-8 ">
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
                <div className="col-start-3 -mt-28 -ml-[7.8rem] text-white w-36 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer hidden sm:block">
                  View Data set
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Hello My Friend */}
        <div
          className={`${
            currentIndex === 1 ? "block" : "hidden"
          } duration-700 ease-in-out`}
          data-carousel-item
        >
          <div className="flex items-center justify-center w-full h-full ">
            {/* First Card: Hello World */}
            <div className="w-full flex justify-center font-nunito md:h-96">
              <div class="grid border w-[90%] border-black rounded-lg grid-cols-3 gap-4 ">
                <div className="...">
                  <img
                    className="w-50 h-96"
                    src="src\assets\EcoDataCenter\ecostory.png"
                  />
                </div>
                <div className="pt-3 md:-ml-16">
                  <li className=" font-normal text-sm">Transportation</li>
                  <p className=" font-semibold text-lg">
                    The Lagos red rail line impact
                  </p>
                </div>
                <div className="pt-3 italic md:ml-36">
                  <p className=" font-normal  text-sm">
                    Echoed from Lagos, Nigeria
                  </p>
                  <p className=" font-normal text-ecoGreen text-sm">
                    50 ECO Points
                  </p>
                </div>
                <div className="col-end-4 md:-ml-24  -mt-80 col-span-2 ...">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:w-[90%]   mx-0 md:mx-auto  gap-8 ">
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
                <div className="col-start-3 -mt-28 -ml-[7.8rem] text-white w-36 h-10 text-center bg-ecoGreen p-2 rounded-md font-light text-[14px] cursor-pointer hidden sm:block">
                  View Data set 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
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
  );
}
