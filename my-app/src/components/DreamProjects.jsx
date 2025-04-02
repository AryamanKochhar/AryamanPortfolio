import React from 'react';
import ProjectCard from './ProjectCard';

function DreamProjects() {
  const dreamProjects = [
    {
      title: 'AI-Powered Trading Bot',
      description: 'A fully autonomous trading bot using reinforcement learning.',
      link: '#',
    },
    {
      title: 'Personalized Learning Platform',
      description: 'An AI-driven platform for personalized education.',
      link: '#',
    },
  ];

  return (
    <section id="dream-projects">
      <h2>Dream Projects</h2>
      {dreamProjects.map(project => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default DreamProjects;