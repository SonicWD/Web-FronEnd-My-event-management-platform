// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../index.css';
import PropTypes from 'prop-types';

const MyAccount = ({ name, email, password }) => {
  return (
    <div className="login">
      <div className="form-container">   
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">{name}</p>
          
            <label htmlFor="email" className="label">Email</label>
            <p className="value">{email}</p>
          
            <label htmlFor="password" className="label">Password</label>
            <p className="value">{password}</p>
          </div>
          <input type="submit" value="Edit" className="secondary-button" />
        </form>
      </div>    
    </div>
  );
};
MyAccount.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  };
export default MyAccount;
