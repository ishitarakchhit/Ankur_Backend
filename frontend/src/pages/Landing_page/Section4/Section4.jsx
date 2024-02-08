import React from "react";
import "./Section4.css";
import img1 from "../s5-img.png";

const Section4 = () => {
  return (
    <>
      <div className="s4-mainContainer">
        <div className="s4-gridContainer">
          <div className="s4-gridDiv1">
            <div className="s4-gridImgContaier">
              <img className="s4-gridImg" src={img1} alt="" />
            </div>
          </div>
          <div className="s4-gridDiv2">
            <div className="s4-gridDiv2-textContainer">
            <br></br> 
              <div className="s4-gridDiv2-text1">
                Start your Cognitive Retraining   <br />
                journey with us.
              </div>
              <div className="s4-gridDiv2-text2">
                Explore Ankur's engaging mental games at your convenience, designed to foster cognitive development and enjoyment for individuals with diverse learning needs.We have games in area of
              </div>
              <div className="s4-grid-iconsDiv">
                <div className="s4-grid-icon">
                  <div className="s4-grid-icon1">
                    <span className="material-symbols-outlined s4-icons">school</span>
                    <span className="s4-iconText"> Educational Games</span>
                  </div>
                  <div className="s4-grid-icon1">
                    <span className="material-symbols-outlined s4-icons">visibility</span>
                    <span className="s4-iconText"> Vision</span>
                  </div>
                </div>
                <div className="s4-grid-icon">
                  <div className="s4-grid-icon1">
                    <span className="material-symbols-outlined s4-icons">
                      lightbulb
                    </span>
                    <span className="s4-iconText"> Problem Solving     </span>
                  </div>
                  <div className="s4-grid-icon1">
                    <span className="material-symbols-outlined s4-icons">
                      Memory
                    </span>
                    <span className="s4-iconText"> Memory </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="s4-grid2-button">Start Playing Now </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
