// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from './api'; 
import '../../index.css';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userInfo = await getUserInfo(token);
        if (userInfo) {
          setUsername(userInfo.username);
        }
      }
    };

    fetchUserInfo();
  }, []);

  const logout = () => {
    setUsername('');// Limpia el array con la info del user
    localStorage.removeItem('token'); // Elimina el token del localStorage
    navigate('/login');
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <header className="navbar">
      <img src="/images/icons/icon_menu.svg" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="/images/logos/logo.svg" alt="logo" className="logo-navbar" onClick={() => navigateTo('/')}/>
        <ul>
          <li><a onClick={() => navigateTo('/create-event')}>Crear Evento</a></li>
          <li><a onClick={() => navigateTo('/eventsP')}>Ver Eventos</a></li>
          <li><a onClick={() => navigateTo('/account')}>Cuenta</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="email-nav">
            <a>{username}</a>
            <a onClick={logout}>Cerrar sesión</a>
            <img src="/images/icons/flechita.svg" alt="flecha" />
          </li>
          <li className="navbar-shopping-cart">
            <img src="/images/icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
