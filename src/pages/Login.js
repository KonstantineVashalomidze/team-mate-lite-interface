import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import * as UserState from "../redux/state/UserState";
import {userStore} from "../redux/store";


export const loadDisplayNameEmailInUserState = async (email) => {
    try {
        // Retrieve JWT token from cookies
        const jwtToken = Cookies.get('jwtToken');

        if (!jwtToken) {
            // Handle case where JWT token is not available
            console.error('JWT token is not available');
            return;
        }

        // Configure Axios request with authorization header
        const config = {
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        };


        // GET request to fetch user's displayName via email
        const responseUserDetails = await axios.get(`http://localhost:8080/api/v1/auth/user/${email}`, config);

        // Dispatch actions to update Redux store
        userStore.dispatch(UserState.setDisplayName(responseUserDetails.data.displayName));
        userStore.dispatch(UserState.setEmail(responseUserDetails.data.email));

    } catch (error) {
        // Handle errors
        console.error('Error fetching user details:', error.message);
    }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const responseJWT = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
            email,
            password
        });


        // Store JWT token in a cookie
        Cookies.set('jwtToken', responseJWT.data.jwt, { expires: 1 });

        // Fetch user's displayName from db via email and set both of them in redux
        await loadDisplayNameEmailInUserState(email)

        // Redirect to "/conversation" after successful login
        navigate('/conversation');

    } catch (error) {
        if (error.response && error.response.status === 403) {
            // Display error message for wrong username or password
            setErrorMessage('Invalid email or password. Please try again.');
        } else {
            // Handle other errors
            console.error('Login failed:', error.message);
        }
    }

    // Clear form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
      <p>Do not have an account? <Link to="/register">Register</Link></p> {/* Link to register page */}
    </div>
  );
};

export default Login;
