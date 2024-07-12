import React, { useState } from 'react';
import axios from 'axios';
import '../../index.css';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [ownerUsername, setOwnerUsername] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:8000/events-create', {
                title,
                description,
                date,
                owner_username: ownerUsername
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        
            alert('Event created successfully');
            setTitle('');
            setDescription('');
            setDate('');
            setOwnerUsername('');
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
                    <div>
                        <label htmlFor="ownerUsername" className="label">Owner Username:</label>
                        <input
                            type="text"
                            id="ownerUsername"
                            value={ownerUsername}
                            onChange={(e) => setOwnerUsername(e.target.value)}
                            placeholder="Enter owner username"
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
