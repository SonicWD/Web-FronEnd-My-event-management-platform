// frontend/src/components/Login.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'; // Asegúrate de ajustar la ruta si es necesario

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            localStorage.setItem('token', response.data.access_token);
            alert('Login successful');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className="login">
            <div className="form-container">   
                <h1 className="title">Login</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label htmlFor="email" className="label">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@example.com"
                            className="input input-email"
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
                    {/*No se va autlizar de momento */}
                    { /* <a href="/" className="login-link">Forgot my password</a> */}
                        <input type="submit" value="sign up" className="secondary-button login-button" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
