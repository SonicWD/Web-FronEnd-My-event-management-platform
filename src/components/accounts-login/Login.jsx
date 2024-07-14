// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../../index.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAuthState } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send login request to the server
            const response = await axios.post('http://localhost:8000/login', { username, password });

            // Assuming server responds with a token
            const token = response.data.token;
            console.log('Login successful');

            // Save token to localStorage
            localStorage.setItem('token', token);

            // Update authState
            setAuthState({ token, isAuthenticated: true });

            // Redirect to home page or any other route
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed');
        }
    };

    return (
        <div className="login">
            <div className="form-container">   
                <h1 className="title">Login</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label htmlFor="username" className="label">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="input input-username"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="*********"
                            className="input input-password"
                            required
                        />
                    </div>
                    <input type="submit" value="log in" className="primary-button login-button" />
                    <div className="login-links">
                        {/* No se va a utilizar de momento */}
                        {/* <a href="/" className="login-link">Forgot my password</a> */}
                        <input type="submit" value="sign up" className="secondary-button login-button" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
