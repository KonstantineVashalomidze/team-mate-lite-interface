// Register.js
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import {loadDisplayNameEmailInUserState} from "./Login";


// Functional component for user registration
const Register = () => {
  // State variables to store display name, email, and password
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
            displayName,
            email,
            password
        });

        if (response.data.jwt.length === 0)
        {
            // Email is already present in the database, show error message
            setError('Email is already registered.');
        }
        else
        {
            // Store JWT token in a cookie
            Cookies.set('jwtToken', response.data.jwt, { expires: 1 });

            // Fetch user's displayName from db via email and set both of them in redux
            await loadDisplayNameEmailInUserState(email)

            // Redirect to "/conversation" after successful login
            navigate('/conversation');

        }



    } catch (error) {
      // Handle registration error here (e.g., show error message)
      console.error('Registration failed:', error.message);
    }

    // Clear form fields after submission
    setDisplayName('');
    setEmail('');
    setPassword('');
  };

  // JSX for registration form
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Display Name:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)} // Update display name state on change
            required // Display name field is required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
            required // Email field is required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
            required // Password field is required
          />
        </label>
        <br />
        <button type="submit">Register</button> {/* Submit button */}
      </form>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if exists */}
      <p>Already have an account? <Link to="/login">Login</Link></p> {/* Link to login page */}
    </div>
  );
};

export default Register; // Export Register component
