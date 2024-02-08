import React from "react";
import "./Footer.css";
import logo1 from "../../../Images/SocialIcons/icon1.png";
import logo2 from "../../../Images/SocialIcons/icon2.png";
import logo3 from "../../../Images/SocialIcons/icon3.png";

const Footer = () => {
  return (
    <>
      <div className="footer-mainContainer">
        <div className="footer-gridContainer">
          <div className="footer-gridDiv">
            <div className="footer_LogoDiv">
              <br></br>
              <h1 className="footerLogo">ANKUR</h1>
              <div className="footer_textDiv">
                 Where every game is a step towards inclusive education,empowering 
                 individuals to thrive in a supportive and innovative learning environment.Join our community now.
              </div>
            </div>
            <div className="footer_iconDiv">
              <img className="footerIcon" src={logo1} alt="" />
              <img className="footerIcon" src={logo2} alt="" />
              <img className="footerIcon" src={logo3} alt="" />
            </div>
            <br></br>
          </div>
        
          
        </div>
      </div>
    </>
  );
};

export default Footer;
