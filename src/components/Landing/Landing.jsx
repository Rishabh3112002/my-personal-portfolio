import React from "react";
import "./Landing.css";
import arrowSvg from "../../assets/arrow.svg";

function Landing() {
  return (
    <div className="landing">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <h1>Rishabh Kathiravan</h1>
      <p>Software Developer/AI Engineer</p>
      <div className="arrow-container">
        <img src={arrowSvg} alt="Double Arrow" className="arrow-svg" />
      </div>
    </div>
  );
}

export default Landing;
