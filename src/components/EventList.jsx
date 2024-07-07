// frontend/src/components/EventList.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/events');
                setEvents(response.data);
            } catch (error) {
                setError('Error fetching events');
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    if (loading) {
        return <p className="text-center mt-4">Loading events...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-4">{error}</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Events</h2>
            {events.length === 0 ? (
                <p className="text-center">No events available</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {events.map((event) => (
                        <li key={event.id} className="py-4">
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <p className="text-gray-500">{event.description}</p>
                            <p className="text-gray-500">{new Date(event.date).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventList;
