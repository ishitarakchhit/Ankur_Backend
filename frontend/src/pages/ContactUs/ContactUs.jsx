import React from "react";
import CuSection1 from "./Section1/Cu_Section1";
import CuSection2 from "./Section2/Cu_Section2";
import Footer from "../Landing_page/Footer/Footer";
import Navigation from "../../components/Navigation";
const ContactUs = () => {
  return (
    <>
      <Navigation />
      <CuSection1 />
      <CuSection2 />
      <Footer />
    </>
  );
};

export default ContactUs;