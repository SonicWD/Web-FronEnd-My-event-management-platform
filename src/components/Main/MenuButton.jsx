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
              <a>{username}</a>
              <a onClick={logout}>Cerrar sesión</a>
            </li>
          </ul>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default MenuButton;
