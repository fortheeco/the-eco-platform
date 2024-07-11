import React from "react";
import commingSoonMobile from "../../assets/SVG/comming-soon-mobile.svg";
import scatterbg from "../../assets/landingpage/scatterdotsBg.svg";
import AppleIcon from "../../assets/SVG/appstore.svg";
import GoogleIcon from "../../assets/SVG/GooglePlay.svg";
// import Button from "../components/Button";
import { CustomButton } from "../utils/Button";
import { Link } from "react-router-dom";
import { navigate } from "@reach/router";
import img1 from "../../assets/landingpage/ecobg.svg";
import img2 from "../../assets/landingpage/project.svg";
import img3 from "../../assets/landingpage/innovation.svg";
import img4 from "../../assets/landingpage/ecoOrg.svg";

const data = [
  {
    id: 1,
    bg: img1,
    title: "ECO Problem",
    text: "Enim faucibus nunc non tincidunt. Libero mauris eu in suscipit molestie venenatis. Et velit sed sagittis.",
    btnText: "EcHo Problem",
  },
  {
    id: 2,
    bg: img2,
    title: "ECO Project",
    text: "Enim faucibus nunc non tincidunt. Libero mauris eu in suscipit molestie venenatis. Et velit sed sagittis.",
    btnText: "Create Organization",
  },
  {
    id: 3,
    bg: img3,
    title: "Innovation",
    text: "Enim faucibus nunc non tincidunt. Libero mauris eu in suscipit molestie venenatis. Et velit sed sagittis.",
    btnText: "EcHo Innovations",
  },
  {
    id: 4,
    bg: img4,
    title: "Organization",
    text: "Enim faucibus nunc non tincidunt. Libero mauris eu in suscipit molestie venenatis. Et velit sed sagittis.",
    btnText: "Create Organization",
  },
];

export default function ComingSoon() {
  return (
    <section className="mx-auto w-[85%] px-8 lg:px-16  mt-[4rem] grid grid-cols-1 sm:grid-cols-2  gap-6">
      {data.map(({ id, bg, title, text, btnText }) => {
        return (
          <div className={`w-full h-[17rem] relative z-10`}>
            <div className="z-10 flex flex-col justify-end h-full w-[80%] p-8">
              <p className="text-[20px] text-white z-[20] font-[500]">
                {title}
              </p>
              <p className="text-[20px] text-[#D8D8D8] text-sm z-[20] my-2">
                {text}
              </p>
              <p className="bg-ecoGreen text-white text-sm py-1 text-center rounded-md z-20 w-[60%]">
                {btnText}
              </p>
            </div>

            <img
              src={bg}
              alt=""
              className="absolute object-cover top-0 right-0 bottom-0 left-0 w-full h-full rounded-md "
            />
          </div>
        );
      })}
    </section>
  );
}
