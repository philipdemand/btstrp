import React, { useState } from 'react'
import './App.css';
import NavBar from './NavBar';

function App() {

  const [lightClicked, setLightClicked] = useState(false)

  const toggleLightMode = () => {
    setLightClicked(!lightClicked)
  }

  return (
    <div className={lightClicked ? "darkapp" : "lightapp"}>
      <NavBar lightClicked={lightClicked} toggleLightMode={toggleLightMode}/>
      <header className={lightClicked ? "darkapp-header" : "lightapp-header"}>
        <h1>SUP</h1>
      </header>
    </div>
  );
}

export default App;
