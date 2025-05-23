import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type Link = {
  id: number;
  url: string;
  text: string;
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

// const monthCalculator = (startDate: string, endDate: string = new Date().toISOString()) => {
//   const start = new Date(startDate);
//   const end = new Date(endDate);

//   let months = differenceInMonths(end, start);
//   const startPlusMonths = new Date(start);
//   startPlusMonths.setMonth(start.getMonth() + months);

//   if (startPlusMonths > end) {
//     months -= 1;
//   }

//   const daysInMonth = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
//   const daysDifference = differenceInDays(end, startPlusMonths);
//   const fractionOfMonth = daysDifference / daysInMonth;

//   return Math.round(months + fractionOfMonth); 
// };

export const userData = {
  name: "Josh Ivan Lanuevo",
  destination: "Junior Android Developer", // "Front End Developer", 
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
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "Frontend" },
      { name: "TailwindCSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", category: "Frontend" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Frontend" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
      { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg ", category: "Frontend" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", category: "Android" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Android" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
      { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Backend" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Dev tools" },
      { name: "Android Studio", icon: "https://img.icons8.com/?size=100&id=xBW8JMtsQGFC&format=png&color=000000", category: "Dev tools" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Dev tools" },
    ]
  },
  experience: {
    jobs: {
      one: {
        title: "Junior Android Developer",
        company: "Squadzip",
        location: "Remote",
        date: "August 2024 - January 2025",
        project: "Android Application",
        responsibilities: [
          "Focus on bug fixing and feature enhancement to improve app performance and usability",
          "Collaborate with the API team and project management team to ensure smooth integration and alignment with project goals"
        ],
        tech: "Kotlin, Jetpack Compose, MVVM Architecture, Clean Architecture and SOLID Principles"
      },
      two: {
        title: "Junior Android Developer",
        company: "Live700 Software Inc.",
        location: "Onsite",
        date: "October 2023 - August 2024",
        project: "Chat Application",
        responsibilities: [
          "Modified and maintained a high-performance chat application for Android using Kotlin and Java",
          "Collaborated with back-end developers to integrate APIs, ensuring smooth data flow and real-time updates"
        ],
        tech: "Kotlin, Native XML, and MVVM Architecture"
      },
      three: {
        title: "Front End Developer Intern",
        company: "Sparkle Star International Corporation",
        date: "August 2023 - September 2023",
        project: "Admin Dashboard",
        responsibilities: [
          "Fixed broken links, ensuring a seamless user experience",
          "Conducted a comprehensive front-end cleanup to improve website functionality",
          "Resolved minor issues on the front end"
        ],
        tech: "React, JavaScript, TypeScript, and CSS"
      }
    }
  }
}
