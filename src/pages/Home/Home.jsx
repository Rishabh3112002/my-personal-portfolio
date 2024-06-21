import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import projects from "../../models/projects";
import experiences from "../../models/experiences";
import Contacts from "../../components/Contacts/Contacts";

function Home() {
  const [loading, setLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const mouseTrackerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!loading) {
      setShowMain(true);
    }
  }, [loading]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mouseTrackerRef.current) {
      mouseTrackerRef.current.style.transform = `translate(${mousePosition.x - 25}px, ${mousePosition.y + scrollPosition - 25}px)`;
    }
  }, [mousePosition, scrollPosition]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="home-page-main">
          <Navbar />
          <div ref={mouseTrackerRef} className="mouse-tracker">
            <div className="mouse-tracker-centre"></div>
          </div>
          <div className="home-page" style={{ opacity: showMain ? 1 : 0 }}>
            <Landing />
            <About />
            <Projects slides={projects} />
            <Skills />
            <Experience slides={experiences} />
            <Contacts />
          </div>
        </div>
        
      )}
    </>
  );
}

export default Home;
