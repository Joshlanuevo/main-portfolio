import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data/data';
import logo from "../images/logo.png";
import { TiWeatherSunny } from 'react-icons/ti';


// const logo ="https://raw.githubusercontent.com/sagar2022/myProjects/main/SAGARR/images/logos.png";

const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }

  useEffect(() => {
    if (linksRef.current && linksContainerRef.current) {
      const linkHeights = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linkHeights}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
          <div><TiWeatherSunny /></div>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
