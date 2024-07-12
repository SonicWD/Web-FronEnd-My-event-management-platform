import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', { username, password });
            console.log('Login successful');
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
