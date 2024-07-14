// src/PrivateRoute.jsx
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { authState } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            element={authState.isAuthenticated ? <Element /> : <Navigate to="/login" />}
        />
    );
};

PrivateRoute.propTypes = {
    element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
