import React from "react";
import tg4asvg from "../../assets/SVG/tg4a.svg";
import arrowupsvg from "../../assets/SVG/arrowwhiteup.svg";
export default function EcoFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-[100%] relative h-full  mt-[10rem] bg-[#263238] font-nunito">
      <div class="grid grid-cols-5 pt-36 pb-10 justify-items-center gap-4">
        <div>
          <img
            src={tg4asvg}
            alt="webdev"
            className="w-20 h-20 object-contain mb-2"
          />
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold">United Kingdom</h1>
          <p className="text-[#C5C5C5]">
            65 Kingsway, Burnage, Manchester, M19 2LL
          </p>
          <br></br>
          <h1 className="text-white text-xl font-semibold">Nigeria</h1>
          <p className="text-[#C5C5C5]">
            61 Adamo Close, Obamusa Avenue, Lekki, Lagos
          </p>
          <br />
          <p className="text-[#FFFFFF]">
            <u>(+234) 0123456789</u>
          </p>
        </div>
        <div>
          <ul className="text-white text-sm font-light">
            <li className="pt-2">Home</li>
            <li className="pt-2">The ECO</li>
            <li className="pt-2">PALs App</li>
            <li className="pt-2">Tech4Good</li>
            <li className="pt-2">Services</li>
          </ul>
        </div>
        <div>
          <ul className="text-white text-sm font-light">
            <li className="pt-2"> Facebook</li>
            <li className="pt-2">Twitter</li>
            <li className="pt-2">Linkedin</li>
            <li className="pt-2">Instagram</li>
            <li className="pt-2">Send a mail</li>
          </ul>
        </div>
        <div className="bg-[#1DB559] border w-12 h-12 justify-items-center rounded-full">
          <img src={arrowupsvg} alt="arrowup" className="p-3  " />
        </div>
      </div>
      <p className="font-montserrat font-[300] text-center text-[13px] text-[#7B7B7B]">
        &copy; {currentYear} Eco Africa. All rights reserved.
      </p>
    </div>
  );
}
