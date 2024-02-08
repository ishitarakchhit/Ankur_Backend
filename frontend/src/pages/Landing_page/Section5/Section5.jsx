import React from "react";
import "./Section5.css";
import icon1 from "../../../Images/s5/s5-icon1.png";
import icon2 from "../../../Images/s5/s5-icon2.jpg";
import icon3 from "../../../Images/s5/speech-therapy.png";
import icon4 from "../../../Images/s5/physical-therapy.png";
import icon5 from "../../../Images/s5/s5-icon5.png";
import icon6 from "../../../Images/s5/s5-icon6.png";
import icon7 from "../../../Images/s5/behavioral.png";
import icon8 from "../../../Images/s5/psychology.png";

const Section5 = () => {
  return (
    <>
      <div className="s5-mainContaier">
        <div className="s5-headContainer">
          <div className="s5-heading">Our Cosulting specialities</div>
          <div className="s5-heading2">
            At Ankur, expert support is just a click away, with a diverse team of professionals ready to assist you at your convenience, 
            <br></br>empowering you to access guidance whenever you need it.
            
          </div>
        </div>
        <div className="s5-gridContainer">
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon1} alt="" style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Sensory Integration Therapy</div>
            </div>
          </div>
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon2} alt="" style={{ width: "90px", height: "90px" }} />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Play Therapy</div>
            </div>
          </div>
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon3} alt="" style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Speech Therapy</div>
            </div>
          </div>
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon4} alt="" style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Physical Therapy </div>
            </div>
          </div>
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon5} alt="" />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Behavioral Therapy</div>
            </div>
          </div>
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon6} alt="" style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Occupational</div>
            </div>
          </div>
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon7} alt="" style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Applied Behavior Analysis (ABA)</div>
            </div>
          </div>
          <div className="s5-gridDiv1">
            <div className="s5-gridDiv1-icon">
              {/* <span class="material-symbols-outlined icons5">home</span> */}
              <img className="s5-icon" src={icon8} alt="" style={{ width: "80px", height: "80px" }} />
            </div>
            <div className="s5-gridDiv1-text">
              <div className="s5-gridDiv1-Text1">Psychology</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
