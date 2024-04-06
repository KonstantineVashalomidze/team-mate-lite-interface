import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import {teamStore, userStore} from "../redux/store";
import * as UserState from "../redux/state/UserState";
import * as TeamState from "../redux/state/TeamState";
import {setTeams} from "../redux/state/TeamState";


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

        // Dispatch actions to update Redux store
        userStore.dispatch(UserState.setUser(responseJWT.data));

        // Fetch teams the user is in
        const userId = responseJWT.data.isInTeams;
        const responseTeamsWithId = await axios.get(`http://localhost:8080/api/v1/teams?userId=${userId}`);

        // Dispatch action to update Redux store with teams
        teamStore.dispatch(setTeams(responseTeamsWithId.data));

        // Redirect to "/conversation" after successful login
        navigate('/main');

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
