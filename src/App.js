import React, { useState } from 'react';
import './App.css';
import logo from './footicon.svg';
import SearchBar from './Searchbar';
import StarRating from './StarRating';
import PaymentForm from './PaymentForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
 
    const handleBookButtonClick = () =>{
      setCurrentPage('book-turf');
    }
  
  const handleNavItemClick = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleExploreButtonClick = () => {
    setCurrentPage('turf-nearby');
  };

 /*  const handleLoginClick = () => {
    setCurrentPage('log-in');
  }; 
 */
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

            <button type="submit"onClick={() => handleNavItemClick('log-in')} className="nav-link">
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

             <button type="submit" onClick={() => handleNavItemClick('log-in') } className="nav-link " >
            Login</button> 
          </form>
         
        </div>
      </div>
    );
  } 
 
  else if (currentPage === 'log-in') {
    
      const turfs = [
        {
          id: 1,
          name: 'Turf 1',
          image: 'https://picsum.photos/200/300',
          rating: 4.5,
        },
        {
          id: 2,
          name: 'Turf 2',
          image: 'https://picsum.photos/200/300',
          rating: 3.8,
        },
        {
          id: 3,
          name: 'Turf 3',
          image: 'https://picsum.photos/200/300',
          rating: 4.9,
        },
      ];
    
      pageContent = (
        <div className='card-container-parent'>
           <SearchBar/>   
          <div className="card-container1">
  
          {turfs.map((turf) => (
            <div className="card-t" key={turf.id}>
              <div className="card-image-t">
                <img className='turf-img' src={turf.image} alt={turf.name} />
              </div>
              <div className="card-content-t">
                <div className='left-container'>
                <h2>{turf.name}</h2>
                <div className="card-rating-t">
                  {turf.rating.toFixed(1)}
                  <span className="stars">
                    <StarRating/>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`fa fa-star${
                          turf.rating >= star ? ' checked' : ''
                        }`}
                      ></i>
                    ))}
                  </span>
                </div>
                </div>
               <div className='right-container'>
               <button onClick={() => handleNavItemClick('book-turf')} className="book-btn-t">Book</button>
                <button className="time-slot-btn-t">Book Time Slot</button>
               </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      );
    }
    else if(currentPage=== 'book-turf')
    {
      pageContent=(
        <div>
        <div className='turf-pic-big'>
          
          <img src='https://playo.gumlet.io/KALIKKALAMTURF20220331072751670838/KalikkalamTurf1648712352202.jpg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright' alt='' className='wide-img' />
          </div>
          <div className='descrip'>
        <h2 id='address'>Address :</h2>
        <h2 id='desc'>Morarji Desai Rd, Vazhakkulam,Kakkanad,Kochi,Kerala </h2>
        <h2 id='hours'>Hours:Open 24 hours</h2>
        <h2 id='phone'>Phone No:9447402989</h2>
        </div>
        <div className='payment-right-section'>
          <PaymentForm/>
        </div>
        </div>
        
       
      );
    }
   
 
  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="website-name">
            <h1 className='card-container'>PlayON</h1>
          </span>
        </div>
        <div className="navbar-right">
          <button onClick={() => handleNavItemClick('home')} className="nav-link">
            Home
          </button>
          <button onClick={() => handleNavItemClick('user-account')} className="nav-link">
            Account
          </button>
          <div className='searchbar'></div>
          <button className="menu-btn">&#9776;</button>
        </div>
      </nav>
      {pageContent}
    </div>
  );
}
  
export default App;





