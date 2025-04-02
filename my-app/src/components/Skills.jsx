import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: 'Python', level: 80, color: '#4CAF50' },
    { name: 'C/C++', level: 70, color: '#2196F3' },
    { name: 'Machine Learning', level: 75, color: '#FF9800' },
    { name: 'Web Development', level: 60, color: '#FFEB3B' },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map(skill => (
        <div key={skill.name}>
          <div className="skill-bar">
            <motion.span
              className={skill.name.toLowerCase().replace('/', '')}
              style={{ backgroundColor: skill.color }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <p>{skill.name} - {skill.level}%</p>
        </div>
      ))}
    </section>
  );
}

export default Skills;