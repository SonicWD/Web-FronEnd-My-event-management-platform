// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
    // Definición de estados locales para los campos del formulario
    const [title, setTitle] = useState(''); // Estado para el título del evento
    const [description, setDescription] = useState(''); // Estado para la descripción del evento
    const [date, setDate] = useState(''); // Estado para la fecha del evento

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        try {
            // Obtener el token del localStorage para autenticación
            const token = localStorage.getItem('token');

            // Realizar la solicitud POST al backend utilizando axios
            await axios.post('http://localhost:5000/events_create', {
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
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-6">Create Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                    <input
                        id="date"
                        type="datetime-local"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent; // Exportar el componente CreateEvent para su uso en otras partes de la aplicación
