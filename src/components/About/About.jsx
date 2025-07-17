import React from "react";
import "./About.css";
import Spline from "@splinetool/react-spline";

function About() {
  return (
    <div id="about" className="about-main">
      <div className="about-title">
        ~About~
      </div>
      <div className="about">
        <div className="about-image-container">
          <Spline scene="https://prod.spline.design/PH5mqG7HXkp3kme5/scene.splinecode" />
        </div>
        <p className="about-text">
          Hello! I am Rishabh, an Australian-based Software Developer & AI
          Engineer. My love affair with computers started at the age of 5
          with classics like "Dangerous Dave" and "Prince of Persia." Fast
          forward to today, and I'm all about turning cool ideas into code,
          crafting scalable AI models in Computer Vision and Natural Language
          Processing, and all that without using fancy Language models! With over 3
          years of professional experience and an ongoing postgrad
          degree, I'm all about diving into challenging projects and making
          them work. When I'm not in coding mode, you'll find me
          binge-watching anime or shooting hoops on the basketball court.
          Let's create something awesome together!<br></br><br></br>Resume: <a className="resume" href="https://drive.google.com/file/d/124fAKvMCySGU-LrikWjt7-8kkv8PLgMh/view?usp=sharing" target="_blank">Click here!</a>
        </p>
      </div>
    </div>
  );
}

export default About;
