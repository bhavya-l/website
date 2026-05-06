export const personalInfo = {
  name: "Bhavya Lamba",
  firstName: "Bhavya",
  lastName: "Lamba",
  title: "Full-Stack Engineer",
  subtitle: "& Creative Technologist",
  tagline: "I build things that live on the internet and feel like they were made with love.",
  email: "bhavyalamba56@gmail.com",
  github: "github.com/bhavya-l",
  linkedin: "linkedin.com/in/bhavyalamba",
  location: "Toronto, Canada",
  available: true,
  bio: "Software engineer and CS grad student focused on building full-stack systems across web, mobile, and backend. I've worked on production-facing products along with personal projects ranging from mobile apps to AI-driven voice agents. I care most about building systems that are not just functional, but intuitive and reliable in real-world use.",
  bio2: "When I'm not at my computer, I'm rock climbing, hiking, learning a new hobby (currently that is drawing), or reading a book ."
};

export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Vivid Seats",
    period: "Sept. 2024 – Dec. 2024",
    color: "#CE3197",
    bg: "#ffebf8",
    index: "01",
    description:
    "Improved partner site usability by building Vue.js components like price sorting and quantity selection from Figma specs, leading to smoother browsing and higher engagement. Developed and maintained FastAPI-based RESTful APIs, integrated Datadog monitoring, and documented 10+ endpoints on Stoplight to reduce onboarding time. Also collaborated on a React migration for a legacy checkout system, scoping tickets, planning architecture, and creating reusable components to streamline purchases.",
    tags: ["React", "TypeScript", "Next.js", "Rust", "Edge Functions"],
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "QBuild Software",
    period: "Sept. 2023 – Aug. 2024",
    color: "#B72025",
    bg: "#feeff0",
    index: "02",
    description:
    "Led migration of the flagship product from .NET to React, improving scalability, maintainability, and user experience while refactoring UI components for faster load times. Delivered 10+ CRM features and resolved 60+ bugs using SQL, C#, and .NET, significantly reducing backlog. Built new CRM pages such as a task scheduler, enhancing usability and stability based on cross-team feedback.",
    tags: ["React", "Ruby on Rails", "GraphQL", "Storybook"],
  },
  {
    id: 3,
    role: "QA Engineer",
    company: "Toronto Transit Commission",
    period: "Sept. 2022 – Dec. 2022",
    color: "#E51A22",
    bg: "#ffeff0",
    index: "03",
    description:
    "Automated updates for 4000+ telephones using a custom VBScript tool, reducing deployment time from two weeks to just four hours. Authored 50+ Selenium-based test cases for web features, improving QA coverage and lowering post-release defects. Contributed to more reliable and efficient system updates through structured testing practices.",
    tags: ["TypeScript", "WebGL", "Canvas API", "Rust (WASM)"],
  },
  {
    id: 4,
    role: "Application Developer",
    company: "Dale Brain Injury Services",
    period: "Jan. 2022 - April 2022",
    color: "#004F96",
    bg: "#e1f1ff",
    index: "03",
    description:
      "Developed and launched a responsive careers webpage using HTML/CSS, increasing job application completions shortly after release. Automated repetitive administrative workflows with Power Automate, saving several hours of manual work each week. Helped streamline internal processes while improving user-facing functionality.",
    tags: ["TypeScript", "WebGL", "Canvas API", "Rust (WASM)"],
  },
  {
    id: 5,
    role: "SEO Intern",
    company: "Syngli Inc.",
    period: "May. 2021 - Aug. 2021",
    color: "#E2776E",
    bg: "#ffefee",
    index: "03",
    description:
      "Revised and updated the company’s Wikipedia pages to align with a redesigned website, improving public perception and brand consistency. Enhanced website usability by adding features like tooltips and FAQ pages while also publishing multiple blog posts. Increased visibility and engagement by optimizing blog content using SEO best practices.",
    tags: ["TypeScript", "WebGL", "Canvas API", "Rust (WASM)"],
  },
  
];

export const projects = [
  {
    id: 1,
    name: "Chemical Safety Voice Agent",
    year: "2026",
    tagline: "Two-Phase RAG System",
    description:
      "A phone callable chemical safety assistant. Uses 250 real SDS documents to find correct product and accurate recovery information within 1-2s.",
    tech: ["Python", "Express", "VAPI/Twilio", "OpenAI API", "Docker Compose"],
    link: "https://github.com/aperalta03/sds-voice-agent/tree/main",
    color: "#F7C948",
    textColor: "#1a1a1a",
    shape: "circle",
  },
  {
    id: 2,
    name: "Signals",
    year: "2025",
    tagline: "Mood Tracking App",
    description:
      "A Flutter based mobile application that uses sensors in the phone to determine factors for high or low mood. Includes light (lux), noise, sleep, and physical activity tracking which culminate to a singular score, gamifying feeling better on a day-to-day.",
    tech: ["Flutter", "Gemini", "Firebase"],
    link: "https://github.com/bhavya-l/MoodTracker",
    color: "#4361EE",
    textColor: "#fff",
    shape: "square",
  },
  {
    id: 3,
    name: "ConfidScope",
    year: "2026",
    tagline: "LLM Confidence Visualization",
    description:
      "A web app designed to look like a standard LLM chat with enhanced features including text coloring corresponding to LLM confidence in token generation, a tree diagram showcasing possible paths during token generation, and a histogram showing possible tokens for that space.",
    tech: ["React", "Python", "Ollama"],
    link: "https://github.com/bhavya-l/MoodTracker",
    color: "#2BC016",
    textColor: "#fff",
    shape: "square",
  },
  {
    id: 4,
    name: "EasyAppointments",
    year: "2025",
    tagline: "AI Voice Assistant for Medical Appointments",
    description:
      "An AI-powered voice agent that schedules medical appointments for the caller. Retrieves their contact information and reason for visit then finds a suitable doctor and time and confirms with caller. Sends a confirmation email with the details all within the duration of the phone call.",
    tech: ["Python", "Twilio", "Pipecat", "OpenAI API"],
    link: "#",
    color: "#ffafcc",
    textColor: "#fff",
    shape: "triangle",
  },
  {
    id: 5,
    name: "PetCare",
    year: "2025",
    tagline: "Pet Care and Pet Sitter Booker",
    description:
      "A mobile app designed for pet owners or sitters to coordinate with one another to make booking/finding a sitter easy and simple. Creates a profile per pet, making sharing information like medicine, feeding habits, and insurance easy and intuitive.",
    tech: ["Kotlin", "Firebase", "Express", "JavaScript"],
    link: "#",
    color: "#D8315B",
    textColor: "#fff",
    shape: "diamond",
  },
];

export const skills = [
  {
    category: "Frontend",
    color: "#E84040",
    bg: "#FFF0F0",
    items: ["React", "Next.js", "TypeScript", "Flutter", "Vue", "D3.js", "HTML/CSS"],
  },
  {
    category: "Backend",
    color: "#4361EE",
    bg: "#F0F3FF",
    items: ["Node.js", "Python", "SQL", "REST APIs", "PostgreSQL", "FastApi", "Express"],
  },
  {
    category: "Infrastructure",
    color: "#2AB887",
    bg: "#F0FBF6",
    items: ["AWS", "Docker", "CI/CD", "Jenkins", "Datadog"],
  },
  {
    category: "Design",
    color: "#F7C948",
    bg: "#FFFBF0",
    items: ["Figma", "Design Systems"],
  },
];

export const education = [
  {
    degree: "B.S. Computer Science",
    school: "University of Waterloo",
    period: "2020 – 2025",
    detail: "",
    color: "#FED34C",
  },
  {
    degree: "Master's in Computer Science",
    school: "Texas A&M University",
    period: "2026-2027",
    detail: "",
    color: "#500000",
  },
];
