import React from "react";
import { FaBehance, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

type Link = {
  id: number;
  url: string;
  text: string;
};

type Social = {
  id: number;
  url: string;
  icon: JSX.Element;
};

export const links: Link[] = [
  {
    id: 1,
    url: "/about",
    text: "about"
  },
  {
    id: 2,
    url: "/experience",
    text: "experience"
  },
  {
    id: 3,
    url: "/projects",
    text: "projects"
  },
  {
    id: 4,
    url: "/skills",
    text: "skills"
  },
  {
    id: 4,
    url: "/contact",
    text: "contact"
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/joshivanlanuevo",
    icon: <FaFacebook />
  },
  {
    id: 2,
    url: "https://www.instagram.com/joshlanuevo/",
    icon: <FaInstagram />
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/josh-ivan-lanuevo-3802ab287/",
    icon: <FaLinkedin />
  },
  {
    id: 4,
    url: "https://github.com/Joshlanuevo",
    icon: <FaGithub />
  }
];
