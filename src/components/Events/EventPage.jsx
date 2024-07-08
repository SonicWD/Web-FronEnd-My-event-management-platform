// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import EventList from './EventList';
import EventDetail from './EventDetail';

const EventPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseDetail = () => {
        setSelectedEvent(null);
    };

    return (
        <div>
            <EventList onEventClick={handleEventClick} />
            {selectedEvent && (
                <EventDetail event={selectedEvent} onClose={handleCloseDetail} />
            )}
        </div>
    );
};

export default EventPage;
