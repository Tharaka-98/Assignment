import React from 'react';

const EventList = ({ events, deleteEvent, editEvent }) => {
    return (
        <div>
            {events.map(event => (
                <div key={event.id}>
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <button onClick={() => editEvent(event)}>Edit</button>
                    <button onClick={() => deleteEvent(event.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default EventList;
