// src/PrivateRoute.jsx
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { authState } = useContext(AuthContext);
    return (
        <Route 
            {...rest}
            element={authState.isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default PrivateRoute;
