import React from "react";
import "./Section1.css";
import img1 from "../../../Images/pandc/community.jpg";

const Section1 = () => {
  return (
    <>
      <div className="PandC-s1-mainContainer">
        <div className="PandC-s1-gridContainer">
          <div className="PandC-s1-gridDiv">
            <div className="PandC-s1-gridDiv-ImgContainer">
              <img className="PandC-s1-gridDiv-Img1" src={img1} alt="" style={{ width: "600px", height: "500px" }}  />
            </div>
          </div>
          <div className="PandC-s1-gridDiv2">
            <div className="PandC-s1-gridDiv2-textDiv">
              <div className="PandC-s1-gridDiv2-text1">Our Community</div>
              <div className="PandC-s1-gridDiv2-text2">
                Our community is the heart of Ankur, a place where educators, parents, therapists, and learners come together to share knowledge, support, and encouragement. Together, we foster growth, celebrate achievements, and champion the potential of every individual, shaping a brighter future for all.
                <br />
                
              </div>
              <div className="PandC-s1-gridDiv2-ButtonDiv">
                {/* <span class="material-symbols-outlined PandCButton">diversity_1</span> */}
                Join Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
