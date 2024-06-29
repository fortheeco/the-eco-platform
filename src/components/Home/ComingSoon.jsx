import React from "react";
import commingSoonMobile from "../../assets/SVG/comming-soon-mobile.svg";
import scatterbg from "../../assets/landingpage/scatterdotsBg.svg";
import AppleIcon from "../../assets/SVG/appstore.svg";
import GoogleIcon from "../../assets/SVG/GooglePlay.svg";
// import Button from "../components/Button";
import { CustomButton } from "../utils/Button";
import { Link } from "react-router-dom";
import { navigate } from "@reach/router";
import africa from "../../assets/landingpage/academicons_africarxiv.svg";

export default function ComingSoon() {
  return (
    <section className="mx-auto w-[80%] px-8 lg:px-16 relative mt-[14rem]">
      <div className="bg-[#273238] lg:h-[400px] flex flex-col md:flex-row py-8 max-w-[989px]">
        <img
          src={scatterbg}
          alt=""
          className="absolute w-full h-full top-0 bottom-0"
        />
        <img
          src={africa}
          alt=""
          className="absolute w-[8rem] h-[8rem] top-[-50px] right-8 "
        />
        <div className="w-1/2 mt-2">
          <img
            src={commingSoonMobile}
            className="h-[40rem] absolute top-[-8rem] ml-[20px] md:ml-[50px] lg:ml-[100px]"
          />
        </div>

        <div
          className="w-1/2 mt-[430px] md:mt-[10px] lg:mt-4 px-8 lg:px-0"
          style={{ zIndex: "10" }}
        >
          <div className="w-[316px]">
            <h2 className="text-white text-[32px] font-medium">PALs Apps</h2>
            <h3 className="text-[#32D272] text-[32px] font-bold">
              Coming Soon!
            </h3>
            <p className="text-white text-md">
              Engage with problems & Project as Partners, Ambassadors & Leaders
              for Sustainability
            </p>
            <div className="mt-4 flex gap-4 mb-7">
              <img
                src={GoogleIcon}
                alt="apple logo"
                className="w-24 lg:w-2/6"
              />
              <img
                src={AppleIcon}
                alt="google logo"
                className="w-24 lg:w-2/6"
              />
            </div>

            <Link to={"/pals"}>
              <CustomButton
                content="Join the PALs network"
                variant="text-white px-3 py-[10px] text-center lg:text-[18px] w-[230px] lg:w-full"
                click={() => {
                  navigate("/pals");
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
