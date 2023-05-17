import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './App.css';
const SearchBar = () => {
 return (
 <div className="search-bar">
 <input type="text" placeholder="Search..." />
 <FaSearch className="search-icon" size={20} color="#999" />

 </div>
 );
}

export default SearchBar;
