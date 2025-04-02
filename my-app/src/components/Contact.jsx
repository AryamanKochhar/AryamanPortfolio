import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
          <li>
            Resume: <a href="YOUR_RESUME_PDF_LINK" download>Download My Resume</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://github.com/AryamanKochhar" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/Aryamankochhar" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;