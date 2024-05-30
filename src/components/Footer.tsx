import React from 'react';
import { userData } from '../data/data';

const Footer = () => {
  return (
    <div className='footer'>
        <span className='footer-name'>{userData.name}</span>
        <div className='footer-right'>
          <span>Item 1</span>
          <span>Copy right</span>
        </div>
    </div>
  )
}

export default Footer;
