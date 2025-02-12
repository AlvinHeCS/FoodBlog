import './App.css';
import React, { useState } from 'react';
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
        <div className='aboutMeTextBox'></div>
      </div>
      <div className="socialsBg"></div>
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
      <form>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

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
