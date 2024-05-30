import React from 'react';
import { userData } from '../data/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
        <h4 className='footer-name'>{userData.name}</h4>
        <div className='footer-right'>
          <h4>Item 1</h4>
          <h4>&copy; {currentYear} {userData.name}. All rights reserved.</h4>
        </div>
    </div>
  )
}

export default Footer;
