import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to drop me a message or connect with me:</p>
        <ul>
          <li>
            Email: <a href="mailto:aryamankochhar456@gmail.com">aryamankochhar456@gmail.com</a>
          </li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/Aryamankochhar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/AryamanKochhar" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;