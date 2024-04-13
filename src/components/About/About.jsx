import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-main">
      <div id="about" className="about-title">
        ~About~
      </div>
      <div className="about">
        <div className="about-image-container">
          <img
            className="about-image"
            src={'src/assets/me.png'}
          />
        </div>
        <p className="about-text">
          Dive into the innovative world of Rishabh Kathiravan, a solo AI engineer with a passion for pushing the boundaries of technology. With a focus on computer vision and NLP, Rishabh's portfolio showcases his expertise in implementing AI models even in JavaScript, providing scalable solutions that redefine the future. From pioneering projects to scalable AI engineering, Rishabh's journey reflects his commitment to crafting tomorrow's tech. Join him as he navigates the realms of AI, transforming ideas into impactful realities and shaping the future of innovation.
        </p>
      </div>
    </div>
  );
}

export default About;
