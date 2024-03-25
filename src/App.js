import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Conversation from './pages/Conversation';
    // Sample data for teams
    const teams = [
      { id: 1, name: 'Team A', description: 'Description for Team A' },
      { id: 2, name: 'Team B', description: 'Description for Team B' },
      { id: 3, name: 'Team C', description: 'Description for Team C' }
    ];
const App = () => {


  
  return (
    <Router>
      <div>
        {/* Main content */}
        <Routes>
          {/* Route for login page */}
          <Route exact path="/login" element={<Login />} />
          {/* Route for register page */}
          <Route exact path="/register" element={<Register />} />
          {/* Route for conversation page */}
          <Route exact path="/conversation" element={<Conversation teams={teams} />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
