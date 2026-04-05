export const SITE = {
  name: "Gabe Chavez",
  initials: "GC",
  title: "Software Engineer",
  greeting: "Hey there, I'm",
  location: "San Francisco, CA",
  email: "rgabechavez@gmail.com",
  githubUrl: "https://github.com/Chacheeokc",
  linkedinUrl: "https://www.linkedin.com/in/r-gabe-chavez/",
  resumePath: "/resume.pdf",
  bio: "I'm a full-stack software engineer who loves building tools that help teams move faster and work smarter. I'm driven by solving real problems and delivering software people actually enjoy using WIP.",
  metaDescription:
    "Software engineer at Oracle building full-stack features for NetSuite's supply chain management team.",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Oracle",
    period: "June 2024 – Present",
    bullets: [
      "Delivered full-stack features and bug fixes for NetSuite's supply chain management and order-to-cash products using Java, SQL, and JavaScript/TypeScript/React.js",
      "Built a large dataset with aggregations, SLA-ready metrics and trend pivots for consumable consignment stock, enabling customers to track consigned stock, stock consumed, vendor, location, and other metrics",
      "Implemented a Pareto classification system with demand stability scoring to prioritize ordering of high-impact, stable stock keeping units; automated reorder suggestions that respect safety stock constraints and lead times",
      "Co-built a lightweight API/UI that lets users request suggested orders and receive prioritized recommendations with rationale and links to underlying data",
      "Expanded reliability and test coverage to ≥ 95% by creating and maintaining unit and automation tests utilizing JUnit, Timber and TeamCity",
      "Led innovation as NetSuite AI Hackathon team lead; organized and directed a first place team, built predictive models (KNN, SVM, Random Forest)",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "JPMorgan Chase & Co",
    period: "May 2023 – Aug 2023",
    bullets: [
      "Designed and developed a generalized regression reconciliation application with Java and Spring Boot to optimize code and workflow testing",
      "Enhanced team productivity with automated testing and user-friendly interface developed via React.js, saving $80k annually",
      "Utilized JUnit tests and Jenkins testing pipeline to put the application into production and testing environments",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "University of Oklahoma",
    period: "Dec 2022 – May 2023",
    bullets: [
      "Optimized specialized linear algebra functions to reduce time and costs for computationally intensive graphics",
      "Utilized Linux virtual machine to write C and assembly in VIM and Nano",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    label: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "SQL", "Python", "C"],
  },
  {
    label: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    items: ["Spring Boot", "REST APIs", "PostgreSQL", "Oracle DB"],
  },
  {
    label: "Tools & Infra",
    items: ["Git", "Jenkins", "TeamCity", "JUnit", "Linux", "Docker"],
  },
];

export const FOOTER = {
  heading: "Get in touch",
  description:
    "I'm always open to new opportunities and conversations. Feel free to reach out via email or connect with me on LinkedIn.",
};
