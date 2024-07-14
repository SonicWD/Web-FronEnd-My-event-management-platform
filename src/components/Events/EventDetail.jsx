/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const EventDetail = ({ event, onClose }) => {
    const [registrations, setRegistrations] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        if (event) {
            console.log('EventDetail loaded with event:', event);
            const fetchRegistrations = async () => {
                try {
                    const token = localStorage.getItem('token');
                    if (!token) {
                        alert('No token found. Please log in.');
                        return;
                    }
                    const response = await axios.get(`http://localhost:8000/events/${event.id}/registrations`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setRegistrations(response.data || []);
                } catch (error) {
                    alert('Failed to fetch registrations');
                }
            };
            fetchRegistrations();
        }
    }, [event]);

    const handleRegister = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('No token found. Please log in.');
                return;
            }
            await axios.post(`http://localhost:8000/events/${event.id}/register`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setIsRegistered(true);
            alert('Successfully registered for the event');
            setRegistrations([...registrations, { user_id: 'current_user' }]);
        } catch (error) {
            alert('Failed to register for the event');
        }
    };

    if (!event) return null;

    return (
        <aside className="product-detail">
            <div className="product-detail-close" onClick={onClose}>
                <img src="/images/icons/icon_close.png" alt="close" />
            </div>
            <img src={event.image} alt={event.title} />
            
            <div className="product-info-details">
                <p>{event.title}</p>
                <p>{new Date(event.date).toLocaleString()}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
                <p>Organizado por: {event.owner_username}</p>
                <p>Capacidad: {event.max_capacity}</p>

                <button 
                    className="primary-button add-to-cart-button" 
                    onClick={handleRegister} 
                    disabled={isRegistered}
                >
                    {isRegistered ? 'Registered' : 'Register'}
                </button>
                <div>
                    <h3>Participants:</h3>
                    <ul>
                        {registrations.map(registration => (
                            <li key={registration.user_id}>
                                User ID: {registration.user_id}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

EventDetail.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string, 
        image: PropTypes.string.isRequired,
        owner_username: PropTypes.string.isRequired,
        max_capacity: PropTypes.number.isRequired
    }),
    onClose: PropTypes.func.isRequired,
};

export default EventDetail;
