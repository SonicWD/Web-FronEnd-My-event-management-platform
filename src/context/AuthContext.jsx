// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token') || '',
        isAuthenticated: !!localStorage.getItem('token'),
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthState({ token, isAuthenticated: true });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
