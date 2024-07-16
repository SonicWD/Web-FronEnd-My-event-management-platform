// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const TestComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <h1>Bienvenido a la Página de Eventos</h1>
      <p>
        Descubre y participa en eventos emocionantes. Nuestra plataforma te permite registrarte en eventos, ver detalles de los eventos, y gestionar tus inscripciones.
      </p>
      <p>
        Para empezar, por favor inicia sesión o crea una cuenta si aún no tienes una.
      </p>
      <div className="button-group">
        <button className="primary-buttoon" onClick={() => navigateTo('/login')}>Iniciar Sesión</button>
        <button className="primary-buttoon" onClick={() => navigateTo('/create-account')}>Crear Cuenta</button>
      </div>
    </div>
  );
};

export default TestComponent;
