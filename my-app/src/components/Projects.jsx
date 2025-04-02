import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Water Potability Detector',
      description: 'A machine learning model to determine water potability.',
      link: 'https://github.com/AryamanKochhar/potabalitydetectionusingml-',
    },
    {
      title: 'Binance Futures and Options',
      description: 'Automated trading system integrated with Binance.',
      link: 'https://github.com/AryamanKochhar',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map(project => (
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

export default Projects;