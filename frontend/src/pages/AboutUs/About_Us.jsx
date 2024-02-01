import React from "react";
import AUSection2 from "./Section2/AU_Section2";
import AUSection3 from "./Section3/AU_Section3";
import AUSection5 from "./Section5/AU_Section5";
import Footer from "../Landing_page/Footer/Footer";
import Navigation from "../../components/Navigation";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <AUSection2 />
      <AUSection3 />
      <AUSection5 />
      <Footer />
    </>
  );
};

export default AboutUs;