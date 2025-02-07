import './App.css';
import React, { useState } from 'react';



function App() {

  // useState returns two things a variable for the initial state in this case set to false and a function to change the variable
  const [isChecked, setIsChecked] = useState(false);
  
  // create a function that change setIsChecked to its opposite value not necesariy though as you can just do this by hand
  const handleChange = () => {
    setIsChecked(!isChecked)
  }


  return (
    <div className="App">
      <header className="header">
        <label className="menuCheckBox">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <label className="side-menu">
            <button className = "btn1">Login</button>
            <button className = "btn2">Search</button>
          </label>
        </label>
        <div className="logo">Angie's Food Blog</div>
      </header>
      <div className="featured">
        <div className = "featuredTextBox"></div>
        <div className="featuredText">Featured Recipes</div>
        <div className="featuredTextDescription">"A recipe is a story that ends with a good meal."</div>
      </div>
      <div className="options">
        <div className = "savoury">
          <div className='whiteTextBox'></div>
        </div>
        <div className = "sweet">
          <div className='whiteTextBox'></div>
        </div>
        <div className = "travel">
          <div className='whiteTextBox'></div>
        </div>
      </div>
      <div className="banner">
        <div className="quote">"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."</div>
      </div>
      <div className="aboutMe"></div>
      <div className="banner"></div>
    </div>
  );
}

export default App;
