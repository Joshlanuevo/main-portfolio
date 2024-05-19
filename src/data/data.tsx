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

export const userData = {
  name: "Josh Ivan Lanuevo",
  destination: "Front End Developer",
  email: "joshlanuevo11@gmail.com",
  phone: "+63 921 457 7200",
  address: "68 Agudo Street. Mandaluyong City",
  about: {
      header: "Welcome! I'm Josh Ivan Lanuevo, a passionate Software Developer with a strong foundation in JavaScript, React, and Kotlin.",
      description: `My journey began as a Front End Developer intern, where I honed my skills and immersed myself in the dynamic world of Front End development. Currently, I thrive as a Software Developer, leveraging the power of Kotlin, especially for mobile development, to build robust, scalable solutions, particularly for Android application. Driven by curiosity and a relentless pursuit of excellence, I'm committed to crafting elegant solutions to complex problems.
      <br /> 
      <br /> 
      When I'm not coding, I enjoy watching anime series like My Hero Academia, Demon Slayer, Jujutsu Kaisen, and many more. Also, I enjoy playing online games with my friends, and sometimes when I get bored I sketch or draw what I like, such as anime characters or anything.`,
      tech: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg " },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ]
  },
}
