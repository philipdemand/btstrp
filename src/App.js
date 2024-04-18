import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import ScrollButton from './ScrollButton';

function App() {

  const [lightClicked, setLightClicked] = useState(false)
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color',
      lightClicked ? '#273e6e' : '#7d838d'
    );
  }, [lightClicked]);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <NavBar lightClicked={lightClicked} toggleLightMode={toggleLightMode} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
      <header className={lightClicked ? "darkapp-header" : "lightapp-header"}>
      <About scrollToContact={scrollToContact} lightClicked={lightClicked} aboutRef={aboutRef}/>
      <Contact lightClicked={lightClicked} contactRef={contactRef}/>
      <ScrollButton scrollTop={scrollTop}/>
      </header>
    </div>
  );
}

export default App;
