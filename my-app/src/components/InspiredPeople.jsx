import React from 'react';
import { motion } from 'framer-motion';

function InspiredPeople() {
  const people = [
    { name: 'Sam Altman', quality: 'Visionary AI leader, co-founder of OpenAI.' },
    { name: 'Nikhil Kamath', quality: 'Co-founder of Zerodha, making stock trading accessible in India.' },
    { name: 'Andrew Huberman', quality: 'Neuroscientist, known for brain function insights via his podcast.' },
    { name: 'Lex Fridman', quality: 'AI researcher and podcast host, fostering deep conversations.' },
    { name: 'Marcus Aurelius', quality: 'Stoic philosopher, author of "Meditations," inspiring resilience.' },
    { name: 'Fyodor Dostoevsky', quality: 'Russian novelist, explored human psychology in "Crime and Punishment."' },
    { name: 'Anurag Kashyap', quality: 'Indian filmmaker, known for bold, unconventional cinema.' },
  ];

  return (
    <section id="inspired-people">
      <h2>People Who Inspire Me</h2>
      {people.map(person => (
        <motion.div
          key={person.name}
          className="person-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{person.name}</h3>
          <p>{person.quality}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default InspiredPeople;