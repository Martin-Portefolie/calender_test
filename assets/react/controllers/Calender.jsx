import React, { useState } from 'react'; // Import React and useState
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Import dayGrid plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGrid plugin
import interactionPlugin from '@fullcalendar/interaction'; // Import interaction plugin

export default function Calendar() {
    const [events, setEvents] = useState([
        { title: 'Event 1', date: '2024-10-15' },
        { title: 'Event 2', date: '2024-10-17' },
    ]);

    const handleDateClick = (arg) => {
        alert(`Date clicked: ${arg.dateStr}`);
    };

    const handleEventClick = (info) => {
        alert(`Event: ${info.event.title}`);
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
                editable={true} // Allows drag and drop of events
            />
        </div>
    );
}
