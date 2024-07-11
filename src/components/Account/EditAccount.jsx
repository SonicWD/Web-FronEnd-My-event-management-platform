// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../index.css';

/**
 * El componente EditAccount permite a los usuarios editar la información de su cuenta.
 * Utiliza el estado para gestionar los inputs del formulario y envía una solicitud POST para actualizar los datos del usuario.
 *
 * Props:
 * - initialName: El nombre inicial del usuario (string, requerido).
 * - initialEmail: El correo electrónico inicial del usuario (string, requerido).
 * - initialPassword: La contraseña inicial del usuario (string, requerido).
 * - onSave: Función de devolución de llamada para manejar la acción de guardar (función, requerido).
 *
 * @param {Object} props - Propiedades del componente.
 * @returns {JSX.Element} El componente renderizado.
 */
const EditAccount = ({ initialName, initialEmail, initialPassword, onSave }) => {
  // Hooks de estado para manejar los inputs del formulario
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  /**
   * Maneja el envío del formulario para guardar los datos actualizados del usuario.
   * Envía una solicitud POST al servidor con los datos actualizados.
   *
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Envía una solicitud POST al servidor con los datos actualizados del usuario
      const response = await axios.post('/api/updateUser', {
        name,
        email,
        password
      });

      // Verifica si el estado de la respuesta es 200 (OK)
      if (response.status === 200) {
        // Llama a la función onSave con los datos actualizados
        onSave({ name, email, password });
      } else {
        console.error('Error al actualizar la información del usuario:', response.data);
      }
    } catch (error) {
      console.error('Error al actualizar la información del usuario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name" className="label">Nombre</label>
        <input 
          type="text" 
          className="input" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        <label htmlFor="email" className="label">Correo Electrónico</label>
        <input 
          type="email" 
          className="input" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        
        <label htmlFor="password" className="label">Contraseña</label>
        <input 
          type="password" 
          className="input" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <input type="submit" value="Guardar" className="primary-button" />
    </form>
  );
};

// PropTypes para verificar el tipo de las props
EditAccount.propTypes = {
  initialName: PropTypes.string.isRequired,
  initialEmail: PropTypes.string.isRequired,
  initialPassword: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditAccount;
