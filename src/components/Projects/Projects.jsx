import React from "react";
import "./Projects.css";
import Carousel from "react-bootstrap/Carousel";

const Projects = ({ slides }) => {
  return (
    <div className="project-main">
      <div className="project">~Projects~</div>
      <div className="custom-carousel-container">
        <Carousel className="custom-carousel">
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-item-div">
                <div className="carousel-item-content">
                  <div className="project-image-code">
                    <a className="code-button" href={slide.gitUrl} target='_blank'>code</a>
                    <img
                      className="project-image"
                      src={slide.imageUrl}
                    />
                    
                  </div>
                  <div className="project-info">
                    <h5 className="project-title">{slide.title}</h5>
                    <p className="project-desc">{slide.content}</p>
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

export default Projects;
