import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
    };

    const deleteEvent = async (id) => {
        await axios.delete(`http://localhost:5000/api/events/${id}`);
        fetchEvents();
    };

    const editEvent = async (event) => {
        await axios.put(`http://localhost:5000/api/events/${event.id}`, event);
        fetchEvents();
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <>
                            <EventForm fetchEvents={fetchEvents} />
                            <EventList events={events} deleteEvent={deleteEvent} editEvent={editEvent} />
                        </>
                    } />
                    <Route path="/events/:id" element={<EventDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
