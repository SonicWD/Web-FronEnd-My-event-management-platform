// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserInfo } from '../Main/api'; // Importa la función de la API aquí
import '../../index.css';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [ownerId, setOwnerId] = useState(null); // Nuevo estado para almacenar ownerId
    const [imageUrl, setImageUrl] = useState('');
    const [maxCapacity, setMaxCapacity] = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const userInfo = await getUserInfo(token);
                    setOwnerId(userInfo.id); // Actualiza ownerId con el id del usuario obtenido
                } catch (error) {
                    console.error('Error fetching user info:', error);
                    // Manejo de errores, por ejemplo, mostrar un mensaje al usuario o redirigir a una página de error
                }
            }
        };

        fetchUserInfo();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const eventData = {
                title,
                description,
                date,
                image: imageUrl,
                max_capacity: parseInt(maxCapacity), // Asegura que max_capacity sea un número entero
                owner_id: ownerId // Usa el ownerId obtenido del usuario
            };

            await axios.post('http://localhost:8000/events-create', eventData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            alert('Event created successfully');
            setTitle('');
            setDescription('');
            setDate('');
            setImageUrl('');
            setMaxCapacity('');
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Failed to create event');
        }
    };
    
    return (
        <div className="login">
            <div className="form-container">   
                <h1 className="title">Create Event</h1>
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <label htmlFor="imageUrl" className="label">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="Enter image URL"
                            className="input"
                            required
                        />
                    </div>

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
                    {/* ownerUsername input removed as ownerId is used instead */}
                    <div>
                        <label htmlFor="maxCapacity" className="label">Max Capacity:</label>
                        <input
                            type="number"
                            id="maxCapacity"
                            value={maxCapacity}
                            onChange={(e) => setMaxCapacity(e.target.value)}
                            placeholder="Enter max capacity"
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

export default CreateEvent;
