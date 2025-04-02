import React, { useState, useEffect } from 'react';

function HourlyTracker() {
  const [entries, setEntries] = useState([]);
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('hourlyEntries')) || [];
    setEntries(savedEntries);
  }, []);

  const addEntry = () => {
    if (task && hours) {
      const newEntry = { task, hours: parseFloat(hours), date: new Date().toLocaleString() };
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);
      localStorage.setItem('hourlyEntries', JSON.stringify(updatedEntries));
      setTask('');
      setHours('');
    }
  };

  return (
    <section id="hourly-tracker">
      <h2>Hourly Tracker</h2>
      <div className="tracker-entry">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task"
        />
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours"
        />
        <button onClick={addEntry}>Add Entry</button>
      </div>
      <div>
        {entries.map((entry, index) => (
          <div key={index}>
            <p>{entry.date}: {entry.task} - {entry.hours} hours</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyTracker;