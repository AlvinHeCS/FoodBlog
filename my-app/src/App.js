import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';

function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="home">
      <header className="header">
        <label className="menuCheckBox">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <div className="menuIconContainer">
            <img src="/menu.png" alt="menu" className='menuIcon'/>
          </div>
          <div className="side-menu">
            <button className="btn1" onClick={() => navigate('/login')}>Login</button>
            <Link to="/">
              <button className="btn2">Home</button>
            </Link>
          </div>
        </label>
        <div className="logo">Food Blog</div>
      </header>
      <Link to="/featured" className="featured-link">
        <div className="featured">
          <div className="featuredTextBox"></div>
          <div className="featuredText">Featured Recipes</div>
          <div className="featuredTextDescription">"A recipe is a story that ends with a good meal."</div>
        </div>
      </Link>
      <div className="options">
        <div className="savouryParent">
          <Link to="/savoury">
            <div className="savoury">
              <div className='whiteTextBox'>
                <div className='optionsTitles'>Savoury</div>
                <div className='optionsDescription'>"A rich, flavorful dish with the perfect blend of spices and hearty ingredients, offering pure comfort in every bite."</div>
              </div>
            </div>
          </Link>
        </div>
        <div className='sweetParent'>
          <Link to="/sweet">
            <div className="sweet">
              <div className='whiteTextBox'>
                <div className='optionsTitles'>Sweet</div>
                <div className='optionsDescription'>"A deliciously sweet treat, full of rich flavors and a touch of indulgence in every bite."</div>
              </div>
            </div>
          </Link>
        </div>
        <div className='travelParent'>
          <Link to="/travel">
            <div className="travel">
              <div className='whiteTextBox'>
                <div className='optionsTitles'>Travel</div>
                <div className='optionsDescription'>"An unforgettable journey filled with new sights, cultures, and adventures that leave lasting memories."</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="banner">
        <div className="quote">"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."</div>
      </div>
      <div className="aboutMeContainer">
        <div className='aboutMePic'></div>
        <div className='aboutMeTextBox'>
          <div className='aboutMeTitle'>About Me</div>
          <div className='aboutMeDescription'>I'm a guy who’s absolutely passionate about cooking—there’s nothing I love more than experimenting in the kitchen, discovering new flavors, and perfecting my favorite recipes. What started as a simple hobby soon turned into something more, and I found myself wanting to share my creations with others. That’s why I started my food blog—a place where I can document my culinary adventures, share my favorite recipes, and hopefully inspire others to get creative in the kitchen. Whether it’s a simple home-cooked meal or an ambitious dish I’ve been perfecting for weeks, I believe food is meant to be enjoyed and shared. Join me on this journey as I explore new flavors, techniques, and the joy of cooking!</div>
        </div>
      </div>
      <div className="socialsBg">
        <div className='socialsBtnContainer'>
        </div>
        <div className='socialsBtnContainer'></div>
        <div className='socialsBtnContainer'></div>
      </div>
    </div>
  );
}

function FeaturedPage() {
  return (
    <div className="featured-page">
      <header className="header">
        <label className="menuCheckBox">
          <label className="menuIconContainer">
            <img src="/menu.png" alt="menu" className='menuIcon'/>
          </label>
          <input type="checkbox" />
          <label className="side-menu">
            <Link to="/login">
              <button className="btn1">Login</button>
            </Link>
            <Link to="/">
              <button className="btn2">Home</button>
            </Link>
          </label>
        </label>
        <div className="logo">Featured Recipes</div>
      </header>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="login-page">
      <header className="header">
        <label className="menuCheckBox">
          <label className="menuIconContainer">
            <img src="/menu.png" alt="menu" className='menuIcon'/>
          </label>
          <input type="checkbox" />
          <label className="side-menu">
            <Link to="/login">
              <button className="btn1">Login</button>
            </Link>
            <Link to="/">
              <button className="btn2">Home</button>
            </Link>
          </label>
        </label>
        <div className="logo">Login</div>
      </header>
      <div className='loginBox'>
        <Login />
      </div>
    </div>
  );
};

function SavouryPage() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='savouryPage'>
      <header className="header">
        <label className="menuCheckBox">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <div className="menuIconContainer">
            <img src="/menu.png" alt="menu" className='menuIcon'/>
          </div>
          <div className="side-menu">
            <button className="btn1" onClick={() => navigate('/login')}>Login</button>
            <Link to="/">
              <button className="btn2">Home</button>
            </Link>
          </div>
        </label>
        <div className="logo">Savoury Recipes</div>
      </header>
    </div>
  );
}

function SweetPage() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='sweetPage'>
      <header className="header">
        <label className="menuCheckBox">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <div className="menuIconContainer">
            <img src="/menu.png" alt="menu" className='menuIcon'/>
          </div>
          <div className="side-menu">
            <button className="btn1" onClick={() => navigate('/login')}>Login</button>
            <Link to="/">
              <button className="btn2">Home</button>
            </Link>
          </div>
        </label>
        <div className="logo">Sweet Recipes</div>
      </header>
    </div>
  );
}

function TravelPage() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='travelPage'>
      <header className="header">
        <label className="menuCheckBox">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
          <div className="menuIconContainer">
            <img src="/menu.png" alt="menu" className='menuIcon'/>
          </div>
          <div className="side-menu">
            <button className="btn1" onClick={() => navigate('/login')}>Login</button>
            <Link to="/">
              <button className="btn2">Home</button>
            </Link>
          </div>
        </label>
        <div className="logo">Travel</div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<FeaturedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/savoury" element={<SavouryPage />} />
        <Route path="/sweet" element={<SweetPage />} />
        <Route path="/travel" element={<TravelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
