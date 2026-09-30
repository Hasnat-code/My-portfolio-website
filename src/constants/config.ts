type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    skills: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Hasnat Imtiaz | Portfolio",
    fullName: "Muhammad Hasnat Imtiaz",
    email: "your-email@mail.com",
  },
  hero: {
    name: "Muhammad Hasnat Imtiaz",
    p: ["I code, solve problems, and build need-based", "solutions in the software environment"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Software Developer skilled in C++, Java, Python, JavaScript,
      TypeScript, React, Node.js, and Spring Boot. I have a strong foundation
      in databases, APIs, system design, operating systems, computer
      networking, and machine learning. I enjoy building scalable, efficient,
      and user-focused software that solves real-world problems.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    skills: {
      p: "What I bring",
      h2: "Skills.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects show how I turn ideas into working software, from an
    AI chatbot grounded in real documents to deep learning forecasts and a full
    enrollment platform. Each one is built to solve a real problem.`,
    },
  },
};
