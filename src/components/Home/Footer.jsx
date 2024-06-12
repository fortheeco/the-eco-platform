import React from "react";
import { CustomButton } from "../utils/Button";
import { SOCIALS } from "../data";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#263238] py-8 lg:py-16 text-white mt-24 lg:mt-[12rem]">
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
        <p className="font-montserrat font-light text-[14px]">
          &copy; {currentYear} Eco Africa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
