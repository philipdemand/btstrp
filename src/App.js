import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import ScrollButton from './ScrollButton';
import { PROJECTS } from './misc/Projects.js'
import Portfolio from './Portfolio.js';
import Footer from './Footer.js';

function App() {

  const [lightClicked, setLightClicked] = useState(false)
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null)

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      lightClicked ? '#121212' : '#F6F7FB'
    );
  }, [lightClicked]);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const toggleLightMode = () => {
    setLightClicked(!lightClicked)
  }

  return (
    <div className={lightClicked ? "darkapp" : "lightapp"}>
      <NavBar lightClicked={lightClicked} toggleLightMode={toggleLightMode} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} scrollToPortfolio={scrollToPortfolio}/>
      <header className={lightClicked ? "darkapp-header" : "lightapp-header"}>
      <About scrollToContact={scrollToContact} lightClicked={lightClicked} aboutRef={aboutRef}/>
      <Portfolio projects={PROJECTS} lightClicked={lightClicked} portfolioRef={portfolioRef}/>
      <Contact lightClicked={lightClicked} contactRef={contactRef}/>
      <Footer lightClicked={lightClicked}/>
      <ScrollButton lightClicked={lightClicked} scrollTop={scrollTop}/>
      </header>
    </div>
  );
}

export default App;
