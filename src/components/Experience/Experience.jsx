import React from "react";
import "./Experience.css";
import Carousel from "react-bootstrap/Carousel";

const Experience = ({ slides }) => {
  return (
    <div id="exp" className="experience-main">
      <div className="experience">~Work~</div>
      <div className="custom-carousel-container">
        <Carousel className="custom-carousel">
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-item-div">
                <div className="carousel-item-content">
                  <div className="experience-company-role">
                    <h1 className="experience-company">{slide.company}</h1>
                    <p1 className="experience-role">{slide.role}</p1>
                    <p1 className="experience-duration">{slide.duration}</p1>
                  </div>
                  <div className="experience-info">
                    <ul className="experience-desc">
                        {slide.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
