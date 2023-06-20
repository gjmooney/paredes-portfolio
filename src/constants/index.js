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
  mongodb,
  git,
  figma,
  docker,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  berkeley,
  igmr,
  quantstack,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Robotics Software Developer",
    company_name: "QuantStack",
    icon: quantstack,
    iconBg: "#FFF481",
    date: "April 2022 - Present",
    points: [
      "Developing JupyterLab extensions and widgets to facilitate the use of ROS on a web browser.",
      "Collaborating with RWTH to integrate a master's robotics course involving ROS into a JupyterHub environment",
      'Presented "Teaching ROS with JupyterLab" at ROSCon 2022 in Kyoto.',
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "IGMR - RWTH Aachen University",
    icon: igmr,
    iconBg: "#FFFFFF",
    date: "July 2021 - March 2022",
    points: [
      "Tested open-source robots and developed the contents of a ROS (Robot Operating System) seminar for master's students.",
    ],
  },
  {
    title: "Undergraduate Researcher Embodied Dexterity Group",
    company_name: "UC Berkeley College of Engineering",
    icon: berkeley,
    iconBg: "#003360",
    date: "August 2019 - May 2020",
    points: [
      "Designed and 3D-printed gripper mechanisms for an autonomous underwater vehicle (AUV) with the goal of collecting coral samples from the Pacific ocean.Designed.",
    ],
  },
  {
    title: "Mechanical Engineering Intern",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - August 2019",
    points: [
      "Taught FANUC robots new manufacturing processes such as welding and adhesive application to implement design changes in the Model 3 production line.",
      "Tested the properties of boron-treated steel welds by performing shear and tensile tests and examining the cross-sectional cuts.",
      "Designed the Body In White (BIW) overall layout with the collaboration of automation vendors and factory engineers.",
    ],
  },
  {
    title: "Hybrid Robotics Research Assistant",
    company_name: "UC Berkeley College of Engineering",
    icon: berkeley,
    iconBg: "#003360",
    date: "June 2028 - December 2018",
    points: [
      "Generated optimized trajectories for Agility Robotics two-legged robot, Cassie, by using FROST (Fast Robot Optimization and Simulation Toolkit) in Matlab.Generated.",
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
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
    name: "Car Rent",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
