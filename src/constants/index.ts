import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TSkillGroup,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  meta,
  starbucks,
  tesla,
  shopify,
  cpp,
  java,
  python,
  springboot,
  databases,
  apis,
  systemdesign,
  operatingsystems,
  networking,
  machinelearning,
  html,
  css,
  tailwind,
  git,
  docker,
  softwaredev,
  backend_skill,
  dsa,
  cloud,
  testing,
  problemsolving,
  communication,
  teamwork,
  adaptability,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Need-Based Solution Builder",
    icon: mobile,
  },
];

const skillGroups: TSkillGroup[] = [
  {
    title: "Technical Skills",
    skills: [
      {
        title: "Web Designing",
        description:
          "Building responsive, clean and user-friendly interfaces with HTML, CSS and Tailwind.",
        icons: [html, css, tailwind],
      },
      {
        title: "Software Development",
        description:
          "Designing and building complete, scalable applications from the first idea to a working product.",
        icons: [softwaredev],
      },
      {
        title: "Backend Developer",
        description:
          "Creating server-side logic, services and REST APIs with Node.js and Spring Boot.",
        icons: [backend_skill, nodejs, springboot],
      },
      {
        title: "Programming Languages",
        description: "C++, Java, Python, JavaScript and TypeScript.",
        icons: [cpp, java, python, javascript, typescript],
      },
      {
        title: "Data Structures & Algorithms",
        description:
          "Efficient problem solving backed by strong fundamentals in data structures and algorithms.",
        icons: [dsa],
      },
      {
        title: "Version Control (Git)",
        description:
          "Managing code with Git: branches, commits, merges and clean collaboration.",
        icons: [git],
      },
      {
        title: "Databases & APIs",
        description:
          "Designing databases and building APIs that connect systems reliably.",
        icons: [databases, apis],
      },
      {
        title: "Cloud & Deployment",
        description:
          "Packaging and deploying applications so they run reliably in the cloud.",
        icons: [cloud, docker],
      },
      {
        title: "Testing & Debugging",
        description:
          "Testing code and tracking down bugs quickly so software works as expected.",
        icons: [testing],
      },
    ],
  },
  {
    title: "Interpersonal Skills",
    skills: [
      {
        title: "Problem-Solving",
        description:
          "Breaking complex problems into clear steps and finding practical, need-based solutions.",
        icons: [problemsolving],
      },
      {
        title: "Communication",
        description:
          "Explaining ideas clearly to teammates, clients and non-technical people.",
        icons: [communication],
      },
      {
        title: "Teamwork & Collaboration",
        description:
          "Working closely with others, sharing knowledge and reviewing code together.",
        icons: [teamwork],
      },
      {
        title: "Adaptability",
        description:
          "Learning new tools quickly and adjusting as requirements change.",
        icons: [adaptability],
      },
    ],
  },
];

const technologies: TTechnology[] = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
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
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Databases",
    icon: databases,
  },
  {
    name: "APIs",
    icon: apis,
  },
  {
    name: "System Design",
    icon: systemdesign,
  },
  {
    name: "Operating Systems",
    icon: operatingsystems,
  },
  {
    name: "Computer Networking",
    icon: networking,
  },
  {
    name: "Machine Learning",
    icon: machinelearning,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Contextify",
    description:
      "A RAG-based chatbot that answers questions using your own documents, so responses stay grounded in real context instead of guesses.",
    tags: [
      {
        name: "rag",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
    ],
    features: [
      "Retrieval-Augmented Generation",
      "Context-grounded answers",
      "Semantic search over documents",
      "Conversational chat interface",
    ],
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Stock Market Prediction",
    description:
      "Deep learning model that uses LSTM networks to learn patterns from historical stock data and forecast future price trends.",
    tags: [
      {
        name: "lstm",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "deeplearning",
        color: "pink-text-gradient",
      },
    ],
    features: [
      "LSTM time-series model",
      "Trained on historical prices",
      "Price trend forecasting",
      "Predicted vs actual comparison",
    ],
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Online Tutor Enrollment",
    description:
      "A platform that connects students with tutors and lets them browse, enroll, and manage tutoring sessions online.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    features: [
      "Student and tutor workflows",
      "Browse and enroll in courses",
      "Database-backed records",
      "REST API architecture",
    ],
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, skillGroups, experiences, testimonials, projects };
