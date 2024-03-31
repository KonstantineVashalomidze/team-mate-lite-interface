import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import '../sytles/NavBar.css'
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigate = useNavigate();


  const logOut = () => {
    // Clear the JWT cookie
    Cookies.remove('jwtToken');
    // Redirect to the login page
    navigate('/login');
  };


  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Team Mate Lite</h2>
        </div>
        <div className="navbar-buttons">
          <button className="navbar-button">Chat</button>
          <button className="navbar-button">Calendar</button>
          <button className="navbar-button" onClick={logOut}>LogOut</button>
        </div>
        <div className="navbar-search">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
