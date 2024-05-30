import React from 'react';
import { userData } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer' id='footer'>
      <div className='footer-container'>
        <h4 className='footer-left'>&copy; {currentYear} {userData.name}.</h4>
        <h4 className='footer-right'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='fa-map-marker-alt' /> Philippines
        </h4>
      </div>
    </div>
  );
}

export default Footer;
