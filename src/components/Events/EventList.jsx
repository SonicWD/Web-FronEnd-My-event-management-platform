// frontend/src/components/Events/EventList.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// Luego hay que quitar eso
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import '../../index.css';
import PropTypes from 'prop-types';

// Función para generar datos falsos de eventos
const generateFakeEvents = () => {
    return [
        { 
            id: 1, 
            title: 'Evento falso 1', 
            description: 'nanana mañana a las 8', 
            date: new Date().toISOString(),
            image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // URL de la imagen para el evento 1
            location: 'Parque Central' // Lugar del evento 1
        },
        { 
            id: 2, 
            title: 'Evento flaso 2', 
            description: 'Pasado mañana supongo reunion con RH por chiste de la capa 8 a clientes xd', 
            date: new Date().toISOString(),
            image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // URL de la imagen para el evento 2
            location: 'Oficina Principal' // Lugar del evento 2
        },
    ];
};

const EventList = ({ onSelectEvent }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simular carga asíncrona
        setTimeout(() => {
            const fakeEvents = generateFakeEvents();
            setEvents(fakeEvents);
            setLoading(false);
        }, 1000); // Simular retardo de 1 segundo
    }, []);

    //ESTO ES PARA CUANDO EL BACKEND FUNCIONE ;)
    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try {
    //             const response = await axios.get('/events');
    //             setEvents(Array.isArray(response.data) ? response.data : []);
    //         } catch (error) {
    //             setError('Error fetching events');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchEvents();
    // }, []);

    if (loading) {
        return <p className="text-center mt-4">Loading events...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-4">{error}</p>;
    }

    return (
        <div className="cards-container">
            <h2 className="text-2xl font-bold mb-4">Events</h2>
            {events.length === 0 ? (
                <p className="text-center">No events available</p>
            ) : (
                <div className="cards-container">
                    {events.map((event) => (
                        <div key={event.id} className="product-card" onClick={() => onSelectEvent(event)}>
                            <img src={event.image} alt={event.title} />
                            <div className="product-info">
                                <div>
                                    <h3 className="text-lg font-semibold">{event.title}</h3>
                                    <p className="text-gray-500">{event.description}</p>
                                    <p className="text-gray-500">{new Date(event.date).toLocaleString()}</p>
                                    <p className="text-gray-500">{event.location}</p>
                                </div>
                                <figure>
                                    <img src="/images/icons/calendar-search-svgrepo-com.svg" alt="" />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

EventList.propTypes = {
    onSelectEvent: PropTypes.func.isRequired,
};

export default EventList;
