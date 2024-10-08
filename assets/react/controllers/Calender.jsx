import React, {useEffect, useState} from 'react'; // Import React and useState
import FullCalendar from '@fullcalendar/react'; // Import FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Import dayGrid plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGrid plugin
import interactionPlugin from '@fullcalendar/interaction'; // Import interaction plugin




export default function Calendar() {

    const [events, setEvents] = useState([
        { id: 1, title: 'Event 1', date: '2024-10-15' },
        { id: 2, title: 'Event 2', date: '2024-10-17' },
    ]);


    // Function to handle date click and add a new event
    const handleDateClick = (arg) => {
        const eventName = prompt('Enter event title'); // Prompt user for event name
        if (eventName) {
            const newEvent = { id: Date.now(), title: eventName, date: arg.dateStr };
            setEvents([...events, newEvent]); // Add new event to state
        }
    };

    const handleEventClick = (info) => {
        const action = prompt(`Edit or Delete? \n1. Edit \n2. Delete`, '1'); // Choose action
        if (action === '1') {
            // Handle edit
            const newTitle = prompt('Edit event title', info.event.title); // Prompt for new title
            if (newTitle) {
                const updatedEvents = events.map((event) =>
                    event.id === info.event.id ? { ...event, title: newTitle } : event
                );
                setEvents(updatedEvents); // Update the state with the edited event
                info.event.setProp('title', newTitle); // Update FullCalendar's event title
            }
        } else if (action === '2') {
            // Handle delete
            const updatedEvents = events.filter((event) => event.id !== info.event.id); // Remove the event from state
            setEvents(updatedEvents); // Update the state
            info.event.remove(); // Remove the event from the calendar's UI
        }
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
