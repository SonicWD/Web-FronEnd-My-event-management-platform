/* eslint-disable no-unused-vars */
import Reacrt from 'react';
import PropTypes from 'prop-types';

const EventDetail = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <aside className="product-detail">
            <div className="product-detail-close" onClick={onClose}>
                <img src="/assets/images/icons/icon_close.png" alt="close" />
            </div>
            <img src={event.image} alt={event.title} />
            <div className="points">
                <li><button className="active"></button></li>
                <li><button></button></li>
                <li><button></button></li>
            </div>
            <div className="product-info-details">
                <p>{event.title}</p>
                <p>{new Date(event.date).toLocaleString()}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
                <button className="primary-button add-to-cart-button">
                    <img src="/assets/images/icons/bt_add_to_cart.svg" alt="add to cart" />
                    Add to cart
                </button>
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
        location: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EventDetail;
