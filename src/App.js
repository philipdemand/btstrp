import React, { useState, useRef } from 'react'
import './App.css';
import NavBar from './NavBar';
import About from './About';

function App() {

  const [lightClicked, setLightClicked] = useState(false)
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLightMode = () => {
    setLightClicked(!lightClicked)
  }

  return (
    <div className={lightClicked ? "darkapp" : "lightapp"}>
      <NavBar lightClicked={lightClicked} toggleLightMode={toggleLightMode} scrollToAbout={scrollToAbout}/>
      <header className={lightClicked ? "darkapp-header" : "lightapp-header"}>
      <About aboutRef={aboutRef}/>
      </header>
    </div>
  );
}

export default App;
