import React from "react";
import webdevsvg from "../../assets/SVG/webdev.svg";
import datasciencesvg from "../../assets/SVG/datascience.svg";
import uiuxsvg from "../../assets/SVG/uiux.svg";
import appsvg from "../../assets/SVG/app.svg";
export default function EmpowerAfrica() {
  return (
    <div className="w-[100%] relative h-full  mt-[3rem] font-nunito">
      <h1 className="text-center pt-16 text-2xl font-semibold">
        We empower Africa with our Services
      </h1>
      <p className="text-center text-[#474747]">
        Aliquam tellus hac commodo nunc sapien ultrices cum pharetra tincidunt.
        Eget phasellus tempor proin mi.
      </p>

      <div class="sm:flex w-[100%] justify-self-center justify-items-center gap-4 mt-10">
        <div className="w-[50%] sm:pl-10">
          <img
            src={webdevsvg}
            alt="webdev"
            className="w-12 h-12 object-contain mb-2"
          />
          <h1 className=" font-semibold text-lg text-ecoGreen sm:text-2xl ">
            Web Development
          </h1>
          <p className="text-[#474747] font-semibold text-sm pt-2 ">
            Crafting Digital Experiences, Building Tomorrow's Solutions
          </p>
          <ul className=" list-disc ">
            <li className="pt-2">Tailored websites and web applications</li>
            <li className="pt-2">Implementation of scalable CMS</li>
            <li className="pt-2">Website Optimization</li>
            <li className="pt-2">Amongst more others</li>
          </ul>
        </div>
        <div className="w-[50%] mt-8">
          <img
            src={appsvg}
            alt="app"
            className="w-12 h-12 object-contain mb-2"
          />
          <h1 className=" font-semibold text-lg text-ecoGreen sm:text-2xl ">
            App Development
          </h1>
          <p className="text-[#474747] font-semibold text-sm pt-2 ">
            Innovating Mobile Solutions, Empowering Your Digital Future
          </p>
          <ul className=" list-disc ">
            <li className="pt-2">End-to-end mobile app development</li>
            <li className="pt-2">High performing android & ios apps</li>
            <li className="pt-2">App stores ranking</li>
            <li className="pt-2">And more</li>
          </ul>
        </div>
        <div className="w-[50%] mt-8">
          <img
            src={datasciencesvg}
            alt="datascience"
            className="w-12 h-12 object-contain mb-2"
          />
          <h1 className=" font-semibold text-lg text-ecoGreen sm:text-2xl ">
            Data Science
          </h1>
          <p className="text-[#474747] font-semibold text-sm pt-2 ">
            Transforming Data into Actionable Insights
          </p>
          <ul className=" list-disc ">
            <li className="pt-2">Analyzing complex data sets </li>
            <li className="pt-2">machine learning for future prediction</li>
            <li className="pt-2">
              Building custom machine learning models and AI solutions
            </li>
            <li className="pt-2">And more</li>
          </ul>
        </div>
        <div className="w-[50%] mt-8">
          <img
            src={uiuxsvg}
            alt="uiux"
            className="w-12 h-12 object-contain mb-2"
          />
          <h1 className=" font-semibold text-lg text-ecoGreen sm:text-2xl ">
            Ui/Ux Design
          </h1>
          <p className="text-[#474747] font-semibold text-sm pt-2 ">
            Aliquam tellus hac commodo nunc sapien ultrices cu.
          </p>
          <ul className=" list-disc ">
            <li className="pt-2">Getting to know your users</li>
            <li className="pt-2">
              Designing the structure and organization for your product
            </li>
            <li className="pt-2">Designing interactive elements</li>
            <li className="pt-2">And more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
