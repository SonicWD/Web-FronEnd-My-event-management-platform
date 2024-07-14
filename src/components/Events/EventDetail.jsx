// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { getUserInfo } from "../Main/api"; // Asegúrate de importar getUserInfo desde tu archivo de API

const EventDetail = ({ event, onClose }) => {
  const [registrations, setRegistrations] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }

      try {
        const user = await getUserInfo(token);
        setUserInfo(user);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        alert("Failed to fetch user info");
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (event) {
      console.log("EventDetail loaded with event:", event);
      fetchRegistrations(); // Asegúrate de que fetchRegistrations se llame cuando event cambie
    }
  }, [event]); // Añade event al array de dependencias

  const fetchRegistrations = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/events/${event.id}/registrations`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRegistrations(response.data || []);
    } catch (error) {
      alert("Failed to fetch registrations");
    }
  };

  const handleRegister = async () => {
    if (!userInfo || !userInfo.id) {
      alert("User information not found. Please log in again.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:8000/events/${event.id}/register`,
        {
          event_id: event.id,
          user_id: userInfo.id, // Utilizamos userInfo.id obtenido de getUserInfo
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsRegistered(true);
      alert("Successfully registered for the event");
      setRegistrations([...registrations, { user_id: userInfo.id }]);
    } catch (error) {
      console.error("Failed to register for the event:", error);
      alert("Failed to register for the event");
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
          {isRegistered ? "Registered" : "Register"}
        </button>
        <div>
          <h3>Participants:</h3>
          <ul>
            {registrations.map((registration, index) => (
              <li key={index}>User ID: {registration.user_id}</li>
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
    max_capacity: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default EventDetail;
