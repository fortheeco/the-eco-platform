import React from "react";
import { CustomButton } from "../utils/Button";
import { SOCIALS } from "../data";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263238] w-[100vw] pb-4 pt-8 lg:pt-36 text-white mt-24 lg:mt-[12rem] relative">
      <Subscribe />
      <div className="text-center flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <ul className="flex flex-col md:flex-row gap-6 md:gap-12 text-center font-montserrat font-light text-[14px]">
            <li>Eco</li>
            <li>PALs</li>
            <li>iPALs</li>
            <li>Innovation</li>
          </ul>
          <Link to={"/signup"}>
            <CustomButton
              content="Create Account"
              variant="p-2 cursor-pointer"
            />
          </Link>
        </div>
        <div className="mt-6 mb-6">
          <ul className="flex gap-14 items-center">
            {SOCIALS.links.map((link) => (
              <li key={link}>
                <img src={link} alt="social logo" />
              </li>
            ))}
          </ul>
        </div>
        <p className="font-montserrat font-[300] text-[13px] text-[#7B7B7B]">
          &copy; {currentYear} Eco Africa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const Subscribe = () => {
  return (
    <div className="box-shadow  bg-[#fff] absolute top-[-50%] h-[15rem] w-[45%] left-[27%] p-8">
      <p className="text-[#041E0E]">Subscribe to get News and Updates </p>
      <p className="text-[#7B7B7B]">
        Want to know about what we up to, news about Africa and updates with our
        app? Sign up to our newsletter!
      </p>
    </div>
  );
};
