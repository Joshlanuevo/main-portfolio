import React from "react";
import { FaBehance, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { differenceInMonths, differenceInDays } from 'date-fns';

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

const monthCalculator = (startDate: string, endDate: string = new Date().toISOString()) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let months = differenceInMonths(end, start);
  const startPlusMonths = new Date(start);
  startPlusMonths.setMonth(start.getMonth() + months);

  if (startPlusMonths > end) {
    months -= 1;
  }

  const daysInMonth = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
  const daysDifference = differenceInDays(end, startPlusMonths);
  const fractionOfMonth = daysDifference / daysInMonth;

  return Math.round(months + fractionOfMonth); 
};

export const userData = {
  name: "Josh Ivan Lanuevo",
  destination: "Front End Developer",
  email: "joshlanuevo11@gmail.com",
  phone: "+63 921 457 7200",
  address: "68 Agudo Street. Mandaluyong City",
  about: {
    header: "Welcome! I'm Josh Ivan Lanuevo, a passionate Software Developer with a strong foundation in JavaScript, React, and Kotlin.",
    description: `My journey began as a Front End Developer intern, where I honed my skills and immersed myself in the dynamic world of Front End development. Currently, I thrive as an Android Developer, leveraging the power of Kotlin, especially for mobile development, to build robust, scalable solutions, particularly for Android application. Driven by curiosity and a relentless pursuit of excellence, I'm committed to crafting elegant solutions to complex problems.
    <br /> 
    <br /> 
    When I'm not coding, I enjoy watching anime series like My Hero Academia, Demon Slayer, Jujutsu Kaisen, and many more. Also, I enjoy playing online games with my friends, and sometimes when I get bored I sketch or draw what I like, such as anime characters or anything.`,
    tech: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg " },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ]
  },
  experience: {
    jobs: {
      one: {
        title: "Android Developer",
        date: `November 2023 - Present (${monthCalculator('2023-11-01')} months)`,
        project: "Chat Application",
        responsibilities: [
          "Developed and maintained Android chat application using Kotlin and Java.",
          "Collaborated with cross-functional teams to define, design, and ship new features.",
          "Ensured the performance, quality, and responsiveness of applications.",
          "Identified and corrected bottlenecks and fix bugs.",
          "Worked with RESTful APIs to connect Android applications to back-end services."
        ],
        tech: "Kotlin and Java"
      },
      two: {
        title: "Front End Developer Intern",
        date: `August 2023 - September 2023 (${monthCalculator('2023-08-01', '2023-09-30')} months)`,
        project: "Admin Dashboard",
        responsibilities: [
          "Fixed broken links, ensuring a seamless user experience.",
          "Conducted a comprehensive front-end cleanup to improve website functionality.",
          "Resolved minor issues on the front end."
        ],
        tech: "React and NextJS"
      }
    }
  }
}
