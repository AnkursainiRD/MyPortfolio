import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    gardenSite,
    mongodb,
    git,
    figma,
    jquery,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    java,
    python,
    express,
    travelSite,
    ugwuSite,

  } from "../assets";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Javascript Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "python",
      icon: python,
    },
    
    {
      name: "java",
      icon: java,
    },
    {
      name: "JQuery",
      icon: jquery,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Create Single Page Applications and make them scalable",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        " Code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Node Js / Express Js ",
      icon: nodejs,
      iconBg: "#E6DEDD",
      points: [
        " Proficient in using Node.js for full-stack development, building both server-side and client-side applications",
        "Extensive experience in developing robust and scalable RESTful APIs using Node.js, facilitating seamless communication between front-end and back-end systems.",
        " Expertise in Node.js frameworks like Express.js, leveraging their features for rapid development and creating scalable web applications.",        
      ],
    },
    {
      title: "MongoDB",
      icon: mongodb,
      iconBg: "#383E56",
      points: [
        "Extensive hands-on experience designing, developing, and deploying MongoDB-based solutions for diverse projects.",
        "Proficient in creating and optimizing MongoDB data models, leveraging document-based structures for efficient storage and retrieval.",
        " Successfully optimized MongoDB queries and indexes, improving overall database performance and query response times.",
      ],
    },
    {
      title: "Javascript Developer",
      icon: javascript,
      iconBg: "#E6DEDD",
      points: [
        "Extensive experience in using JavaScript for frontend development, creating dynamic and interactive user interfaces for web applications.",
        "Developed and consumed RESTful APIs using JavaScript, enabling communication between frontend and backend systems for data retrieval and manipulation.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Utilized JavaScript libraries like GreenSock (GSAP) or CSS animations to create engaging animations and visual effects, enhancing user interaction and experience.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: travelSite,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Travel Site",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: travelSite,
      source_code_link: "https://github.com/",
    },
    {
      name: "Central Garden",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: gardenSite,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cynthia Clone",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "html/css",
          color: "blue-text-gradient",
        },
        {
          name: "Gsap Locomotive",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: ugwuSite,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };