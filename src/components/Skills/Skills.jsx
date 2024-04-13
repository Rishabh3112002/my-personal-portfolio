import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skill-main">
      <div id="skill" className="skill-title">
        ~Skills~
      </div>
      <div className="skills">
        <div className="programming">
          <h1 className="head">Programming</h1>
          <div className="skill-list">
            <p className="skill-list-name">
              Python
              <br />
              JavaScript
              <br />
              SQL
              <br />
              Bash
              <br />
              C/C++
            </p>
          </div>
        </div>
        <div className="sep1"></div>
        <div className="technologies">
          <h1 className="head">Technologies</h1>
          <div className="skill-list">
            <p className="skill-list-name">
              PyTorch
              <br />
              TensorFlow
              <br />
              NodeJS
              <br />
              Git/GitHub
              <br />
              MySQl
              <br />
              AWS
            </p>
          </div>
        </div>
        <div className="sep2"></div>
        <div className="softskills">
          <h1 className="head">Soft Skills</h1>
          <div className="skill-list">
            <p className="skill-list-name">
              Problem Solving
              <br />
              Communicatoin
              <br />
              Teamwork
              <br />
              Flexibility
              <br />
              Adaptability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
