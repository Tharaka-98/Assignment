import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventDetails = ({ match }) => {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            const response = await axios.get(`http://localhost:5000/api/events/${match.params.id}`);
            setEvent(response.data);
        };
        fetchEvent();
    }, [match.params.id]);

    return (
        <div>
            {event && (
                <div>
                    <h1>{event.name}</h1>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <h3>Attendees:</h3>
                    <ul>
                        {event.attendees.map(att => (
                            <li key={att.id}>{att.name} ({att.email})</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
