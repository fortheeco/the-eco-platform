import React from "react";
import heroImg from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <div
      className={`${styles.paddingX} flex justify-between text-white w-[100%] py-3`}
    >
      <h2 className="w-[40%] text-[42px] font-bold">Eco Platform</h2>
    </div>
  );
};

export default Hero;
