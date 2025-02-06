import './App.css';
import React, { useState } from 'react';



function App() {


  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const openMenu = () => {
    setIsMenuOpen(true); // Set the menu to open
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Set the menu to close
  };






  return (
    <div className="App">
      <header className="header">
        <label className="burger" htmlFor="burger">
          <input 
            type="checkbox"
            id="burger" 
            checked={isMenuOpen} // Tie the checkbox to state
            onChange={() => setIsMenuOpen(!isMenuOpen)} // Toggle state when clicked
          />
          <span />
          <span />
          <span />
        </label>
        <div className="logo">Angie's Food Blog</div>
      </header>
      <div className="featured">
        <div className="overlay"></div>
        <button className="btn">Featured Recipes</button>
      </div>
    </div>
  );
}

export default App;
