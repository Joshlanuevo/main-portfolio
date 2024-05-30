import React from 'react';

import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h1>Contact</h1>
        <div className="underline"></div>
        <div className="contact-content">
          <h3>Get in Touch</h3>
          <h5>I’d love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</h5>
          <div className="contact-socials">
            <h5>You can also find me on these platforms:</h5>
            <div className="icons">
              <a href="mailto:joshlanuevo11@gmail.com" className="icon-link gmail"><FaEnvelope size={30} /></a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="icon-link linkedin"><FaLinkedin size={30} /></a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="icon-link github"><FaGithub size={30} /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact;