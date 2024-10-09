import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar_modal() {
    const [events, setEvents] = useState([
        { id: 1, title: 'Event 1', date: '2024-10-15' },
        { id: 2, title: 'Event 2', date: '2024-10-17' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const handleDateClick = (arg) => {
        setSelectedDate(arg.dateStr);
        setModalType('add');
        setShowModal(true);
    };

    const handleEventClick = (info) => {
        setSelectedEvent(info.event);
        setModalType('edit');
        setInputValue(info.event.title);
        setShowModal(true);
    };

    const handleSave = () => {
        if (modalType === 'add') {
            const newEvent = { id: Date.now(), title: inputValue, date: selectedDate };
            setEvents([...events, newEvent]);
        } else if (modalType === 'edit') {
            if (inputValue) {
                const updatedEvents = events.map((event) =>
                    event.id === selectedEvent.id ? { ...event, title: inputValue } : event
                );
                setEvents(updatedEvents);
                selectedEvent.setProp('title', inputValue);
            } else {
                const updatedEvents = events.filter((event) => event.id !== selectedEvent.id);
                setEvents(updatedEvents);
                selectedEvent.remove();
            }
        }
        setShowModal(false);
        setInputValue('');
    };

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                selectable={true}
                editable={true}
            />

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>{modalType === 'add' ? 'Add Event' : 'Edit/Delete Event'}</h3>
                        <input
                            type="text"
                            placeholder="Enter event title"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
