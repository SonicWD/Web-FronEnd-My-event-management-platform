// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'vaul';

const MenuButton = ({ navigateTo, username, logout }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <img src="/images/icons/icon_menu.svg" alt="menu" className="menu" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content direction="right">
          <Drawer.Handle />
          <ul className="menu-items">
            <li><a onClick={() => navigateTo('/create-event')}>Crear Evento</a></li>
            <li><a onClick={() => navigateTo('/eventsP')}>Ver Eventos</a></li>
            <li><a onClick={() => navigateTo('/account')}>Cuenta</a></li>
            <li>
              <span>{username}</span>
              <a onClick={logout}>Cerrar sesión</a>
            </li>
          </ul>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
};

MenuButton.propTypes = {
  navigateTo: PropTypes.func.isRequired, // Validación para la función de navegación
  username: PropTypes.string,            // Validación opcional para el nombre de usuario
  logout: PropTypes.func.isRequired,     // Validación para la función de cierre de sesión
};

MenuButton.defaultProps = {
  username: '', // Valor por defecto si username no se proporciona
};

export default MenuButton;
