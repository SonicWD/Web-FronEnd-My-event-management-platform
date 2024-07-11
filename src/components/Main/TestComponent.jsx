// frontend/src/TestComponent.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestComponent = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>¡Funciona!</h1>
      <p>El componente de prueba está funcionando correctamente.</p>
      <div>
        <button onClick={() => navigateTo('/login')}>Go to Login</button>
        <button onClick={() => navigateTo('/create-account')}>Go to Create Account</button>
        <button onClick={() => navigateTo('/create-event')}>Go to Create Event</button>
        <button onClick={() => navigateTo('/eventsP')}>Go to Event Page</button>
        <button onClick={() => navigateTo('/account')}>Go to Account info</button>

      </div>
    </div>
  );
};

export default TestComponent;


