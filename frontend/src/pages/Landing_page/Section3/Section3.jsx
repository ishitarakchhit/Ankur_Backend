import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <>
      <div className="s3-mainContaier">
        <div className="s3-headContainer">
          <div className="s3-heading">
            Why you should trust us? <br />
            Get Know about us
          </div>
        </div>
        <div className="s3-gridContainer">
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span
                className="material-symbols-outlined icon"
                style={{ color: "#b34c66" }}
              >
                cognition
              </span>
            </div>
            <div className="s3-gridDiv1-text">
              <div className="s3-gridDiv1-Text1">Mind Games</div>
              <div className="s3-gridDiv1-Text2">
                Learning should be fun! Our platform offers a wide range of interactive and stimulating mental games designed to reinforce learning objectives, enhance cognitive abilities, and promote engagement and motivation.

              </div>
            </div>
          </div>
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span
                className="material-symbols-outlined icon"
                style={{ color: "#ffab21" }}
              >
                trending_up
              </span>
            </div>
            <div className="s3-gridDiv1-text">
              <div className="s3-gridDiv1-Text1">Track Progress</div>
              <div className="s3-gridDiv1-Text2">
                We understand the importance of tracking progress and adjusting interventions accordingly. With Ankur, educators, parents, and therapists can monitor student performance in real-time, enabling timely interventions and personalized support.
              </div>
            </div>
          </div>
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span
                className="material-symbols-outlined icon"
                style={{ color: "#87d44a" }}
              >
                forum
              </span>
            </div>
            <div className="s3-gridDiv1-text">
              <div className="s3-gridDiv1-Text1">Collaboration</div>
              <div className="s3-gridDiv1-Text2">
                Collaboration is key to success. Ankur facilitates seamless communication and collaboration among teachers, parents, therapists, and students. Regular feedback from stakeholders ensures that educational strategies are effective and aligned with individual goals.
              </div>
            </div>
          </div>
          <div className="s3-gridDiv1">
            <div className="s3-gridDiv1-icon">
              <span
                className="material-symbols-outlined icon"
                style={{ color: "#72569d" }}
              >
                healing
              </span>
            </div>
            <div className="s3-gridDiv1-text">
              <div className="s3-gridDiv1-Text1">Therapy</div>
              <div className="s3-gridDiv1-Text2">
                Our platform integrates traditional education with therapies tailored to the unique needs of mentally retarded individuals. Through these therapies , we promote cognitive development, communication skills, and emotional well-being.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
