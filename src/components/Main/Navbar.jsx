import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from './api'; 
import '../../index.css';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
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
    setUsername('');
    localStorage.removeItem('token');
    navigate('/');
  };

  const navigateTo = (path) => {
    setMenuOpen(false); // Close menu on navigation
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <img src="/images/icons/icon_menu.svg" alt="menu" className="menu" onClick={toggleMenu} />
      <div className="navbar-left">
        <img src="/images/logos/logo.svg" alt="logo" className="logo-navbar" onClick={() => navigateTo('/eventsP')} />
        <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
          <li><a onClick={() => navigateTo('/create-event')}>Crear Evento</a></li>
          <li><a onClick={() => navigateTo('/eventsP')}>Ver Eventos</a></li>
          <li><a onClick={() => navigateTo('/account')}>Cuenta</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className={`menu-items ${menuOpen ? 'open' : ''}`}>
          <li>
            <a>{username}</a>
            <a onClick={logout}>Cerrar sesión</a>
          </li> 
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
