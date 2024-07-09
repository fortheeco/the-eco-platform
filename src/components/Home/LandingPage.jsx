import React, { Fragment, useState, useEffect } from "react";
import Hero from "./hero";
import Nav from "../Nav/Nav";
import Org from "./Org";
import ComingSoon from "./ComingSoon";
import Faqs from "./Faqs";
import Footer from "./Footer";

export const LandingPage = () => {
  return (
    <div className="h-full relative">
      <Nav />
      <div className="pt-20"></div>
      <Hero />
      <Org />
      <ComingSoon />
      <Faqs />
      <Footer />
    </div>
  );
};
