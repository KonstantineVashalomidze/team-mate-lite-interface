import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from "./pages/Main";
import './sytles/App.css'
const App = () => {


  
  return (
    <Router>
      <div className="app">
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
