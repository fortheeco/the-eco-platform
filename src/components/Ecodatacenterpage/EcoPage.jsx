import React, { Fragment, useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { EcoDataCenter } from "./ecoDataCenter";
import Carousel from "./carouselcontinous";
import UploadData from "./UploadData";
import EcoStories from "./EcoStories";
import TieredMembership from "./TieredMembership";
import WhoAreWe from "./WhoAreWe";
import Collaborate from "./Collaborate";
import EmpowerAfrica from "./EmpowerAfrica";
import EcoFooter from "./eco-footer";
import Ecostorybigscreen from "./ecostorybigscreen";

export const EcoPage = () => {
  return (
    <div className="h-full relative font-montserrat">
      <Nav />
      <div className="pt-10"></div>
      <EcoDataCenter />
      <UploadData />
      <EcoStories />
      <TieredMembership />
      <WhoAreWe />
      <Collaborate />
      <EmpowerAfrica />
      <EcoFooter />
    </div>
  );
};
