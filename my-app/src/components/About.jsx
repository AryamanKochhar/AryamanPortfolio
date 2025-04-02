import React from 'react';

function About() {
  const hobbies = [
    { name: 'Badminton', content: 'I enjoy playing badminton competitively, having participated in local tournaments.' },
    { name: 'Math', content: 'I love solving complex math problems, especially in number theory.' },
    { name: 'Dramatics', content: 'I’m passionate about theater, having acted in several school plays.' },
  ];

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Hi, I’m Aryaman Kochhar—a passionate learner with a keen interest in machine learning, algorithmic trading, and problem-solving.</p>
      <h3>My Hobbies</h3>
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <h4>{hobby.name}</h4>
          <p>{hobby.content}</p>
        </div>
      ))}
    </section>
  );
}

export default About;