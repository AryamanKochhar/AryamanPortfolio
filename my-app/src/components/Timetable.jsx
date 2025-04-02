import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Timetable() {
  const events = [
    {
      title: 'Study Machine Learning',
      start: new Date(2025, 3, 1, 9, 0), // April 1, 2025, 9:00 AM
      end: new Date(2025, 3, 1, 11, 0), // April 1, 2025, 11:00 AM
    },
    {
      title: 'Badminton Practice',
      start: new Date(2025, 3, 1, 15, 0), // April 1, 2025, 3:00 PM
      end: new Date(2025, 3, 1, 16, 0), // April 1, 2025, 4:00 PM
    },
  ];

  return (
    <section id="timetable">
      <h2>Timetable</h2>
      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </section>
  );
}

export default Timetable;