import React, { useState } from 'react';
import './App.css';
import logo from './footicon.svg';



function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const handleNavItemClick = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleExploreButtonClick = () => {
    setCurrentPage('turf-nearby');
  };

  let pageContent;

  if (currentPage === 'home') {
    pageContent = (
      <div className="landing-page">
        <h1 id='maintext'>Book your perfect turf today and experience the game like never before. Our user-friendly platform lets you choose from a variety of turfs with state-of-the-art facilities.Let's get you playing!<br>
        </br><br></br>Get ready to play - book your turf today!</h1>
        
        <button onClick={handleExploreButtonClick} className="explore-btn">
          Explore Turfs Nearby
        </button>
      </div>
    );
  } else if (currentPage === 'turf-nearby') {
    pageContent = (
      <div className="card-container">
        <div className="card">
          <h2>Sign Up</h2>
          <form>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" />

            <label htmlFor="user-type">User Type</label>
            <select id="user-type" name="user-type">
              <option value="turf-owner">Turf Owner</option>
              <option value="player">Player</option>
            </select>

            <button type="submit"onClick={() => handleNavItemClick('turf-details')} className="nav-link">
            Sign Up</button>
          </form>
        </div>
        <div className="card">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="user-type">User Type</label>
            <select id="user-type" name="user-type">
              <option value="turf-owner">Turf Owner</option>
              <option value="player">Player</option>
            </select>

            <button type="submit" onClick={() => handleNavItemClick('turf-details')} className="nav-link">
            Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />

          <span className="website-name"><h1 className='card-container'>PlayON</h1></span>
        </div>
        <div className="navbar-right">
          <button onClick={() => handleNavItemClick('home')} className="nav-link">
            Home
          </button>
          <button onClick={() => handleNavItemClick('user-account')} className="nav-link">
            Account
          </button>
          <button className="menu-btn">&#9776;</button>
        </div>
      </nav>
      {pageContent}
    </div>
  );

}

export default App;





