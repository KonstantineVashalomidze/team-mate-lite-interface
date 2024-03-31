import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from "./pages/Main";
import './sytles/App.css'
import Navbar from "./components/NavBar";

const App = () => {


  
  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* Main content */}
        <Routes>
          {/* Route for login page */}
          <Route exact path="/login" element={<Login />} />
          {/* Route for register page */}
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/main" element={<Main/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
