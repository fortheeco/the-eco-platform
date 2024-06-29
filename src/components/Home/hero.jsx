import React, { Fragment, useState, useEffect } from "react";
import { styles, layout } from "../../style";
import "./landingPage.css";
import heroImg from "../../assets/landingpage/ecoBannerImg.png";
import fadedGlobe from "../../assets/landingpage/fadedGlobe.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const slidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay speed in milliseconds
  };
  return (
    <div className="w-full ">
      <div
        className={`${layout.section} ${styles.flexBetween} items-center mx-auto w-full relative`}
      >
        <img
          src={fadedGlobe}
          alt=""
          className="left-0 z-0 absolute top-[6.5rem] w-[60%] "
        />
        <div className="w-full z-10">
          <div className="mt-[-8rem] ml-12 z-10">
            <p className="font-semibold text-[32px] ">
              ECHO problems and projects in <br /> your local ECO
            </p>

            <Link to={"/login"}>
              <div className="mt-4 bg-ecoGreen py-2 px-4 w-[8rem]  text-center rounded-md text-[#fff] ">
                EcHo{" "}
              </div>
            </Link>
          </div>
        </div>

        <div className=" mt-20 w-[80%] overflow-x-hidden lg:h-[37rem] md:mr-[-30px]">
          <Slider {...slidersettings}>
            <img src={heroImg} alt="" className="h-[36rem] w-[70%]" />
            <img src={heroImg} alt="" className="h-[36rem] w-[70%]" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
