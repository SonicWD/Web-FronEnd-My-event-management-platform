// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const CreateEvent = () => {
    // Definición de estados locales para los campos del formulario
    const [title, setTitle] = useState(''); // Estado para el título del evento
    const [description, setDescription] = useState(''); // Estado para la descripción del evento
    const [date, setDate] = useState(''); // Estado para la fecha del evento

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario
        
       //ESTO ES PARA SIMULAR LA CARGA FALSA DE DATOS MIENTRAS EL BACKEND SE HACE
       // alert('Event created successfully');

       // Limpiar los campos del formulario después de la creación simulada
       // setTitle('');
       // setDescription('');
       // setDate('');



        try {
            // Obtener el token del localStorage para autenticación
            const token = localStorage.getItem('token');

            // Realizar la solicitud POST al backend utilizando axios
            await axios.post('http://localhost:5000/events-create', {
                title,         // Enviar título
                description,   // Enviar la descripción 
                date           // Enviar la fecha
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // Incluir el token de autorización en los headers
                }
            });

            // Alerta de éxito después de crear el evento
            alert('Event created successfully');

            // Puedes agregar aquí redireccionamiento o actualizar la lista de eventos en la interfaz

        } catch (error) {
            // Manejo de errores en caso de fallo en la solicitud POST
            console.error('Error creating event:', error);
            alert('Failed to create event'); // Alerta de fallo al crear el evento
        }
    };

    // Componente de formulario para crear un evento
    return (
        <div className="login">
            <div className="form-container">   
                <h1 className="title">Create Event</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label htmlFor="title" className="label">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter event title"
                            className="input input-email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="label">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter event description"
                            className="input input-password"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="label">Date:</label>
                        <input
                            type="datetime-local"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="input input-email"
                            required
                        />
                    </div>
                    <button type="submit" className="primary-button login-button">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent; // Exportar el componente CreateEvent para su uso en otras partes de la aplicación
