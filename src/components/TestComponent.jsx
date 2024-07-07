// frontend/src/TestComponent.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useHistory } from 'react-router-dom';

const TestComponent = () => {
  const history = useHistory();

  const navigate = (path) => {
    history.push(path);
  };

  return (
    <div>
      <h1>¡Funciona!</h1>
      <p>El componente de prueba está funcionando correctamente.</p>
      <div>
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/register')}>Go to Register</button>
        <button onClick={() => navigate('/create-event')}>Create Event</button>
        <button onClick={() => navigate('/events')}>View Events</button>
      </div>
    </div>
  );
};

export default TestComponent;

