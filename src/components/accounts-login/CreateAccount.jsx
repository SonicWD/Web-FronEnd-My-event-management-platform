// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../../index.css';

const CreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí se puede manejar el envío del formulario haciendo una solicitud a tu servidor
        console.log('Account created:', { name, email, password });
    };

    return (
        <div className="login">
            <div className="form-container">   
                <h1 className="title">My account</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Samantha Diaz"
                            className="input input-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="email" className="label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@example.com"
                            className="input input-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="label">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*********"
                            className="input input-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <input type="submit" value="Create" className="primary-button create-account-button" />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
