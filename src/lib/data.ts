export const site = {
  name: "Muhammed Nashvin P P",
  shortName: "Nashvin Nidu",
  role: "Full-Stack Developer",
  location: "Kerala, India",
  email: "nashvinpp2005@gmail.com",
  phone: "+91 8590548071",
  github: "https://github.com/nashvin-nidu",
  linkedin: "https://www.linkedin.com/in/nashvin-nidu/",
  twitter: "https://x.com/Nashvin_Nidu",
  tagline:
    "I build fast, reliable products for the web — from multi-tenant platforms to offline-first tools people actually use.",
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer from Kerala, currently pursuing Computer Science at Lovely Professional University on a merit scholarship. I care about the details most people skip — response times, offline states, the way an interface feels under a slow connection.",
    "Right now I'm at Raymas LLP, building multi-tenant commerce and campaign automation that serves thousands of users per restaurant. Before that, I spent time at BrainNix orchestrating AI content pipelines with n8n, Docker and FFmpeg.",
    "Outside of shipping products, I've published research on Synthetic Aperture Radar for disaster monitoring and sit on my department's Research & Innovation Committee.",
  ],
  facts: [
    { label: "Based in", value: "Kerala, India" },
    { label: "Education", value: "CSE, Lovely Professional University" },
    { label: "Currently", value: "Full Stack Intern @ Raymas LLP" },
    { label: "Focus", value: "Next.js · NestJS · PostgreSQL" },
  ],
};

export const experience = [
  {
    company: "Raymas LLP",
    role: "Full Stack Intern",
    period: "Dec 2025 — Present",
    location: "Kerala, India",
    points: [
      "Cut API response times from 5s to under 1s (~80% faster) with caching and server-state management via TanStack Query.",
      "Built bulk SMS & WhatsApp campaign automation reaching 1,000+ users per restaurant, with bulk data import workflows.",
      "Developed a multi-tenant e-commerce and fitness platform with 100+ products inside a monorepo architecture.",
    ],
    stack: ["Next.js", "NestJS", "TanStack Query", "PostgreSQL", "Monorepo"],
  },
  {
    company: "BrainNix Learning Pvt Ltd",
    role: "Junior Software Engineer Intern",
    period: "Jun 2025 — Dec 2025",
    location: "Kerala, India",
    points: [
      "Built 10+ automated AI content workflows by self-hosting and orchestrating n8n for video, audio and media pipelines.",
      "Cut development and testing time by 50% by replacing backend logic with API-driven automation.",
      "Prototyped AI-driven educational video generation, producing 5+ videos with automated FFmpeg media stitching.",
      "Set up Docker-based infrastructure and internal automation bots to speed up experimentation.",
    ],
    stack: ["n8n", "Docker", "FFmpeg", "REST APIs"],
  },
];

export const projects = [
  {
    title: "Compass UI",
    year: "2026",
    description:
      "Open-source React component library with 10+ reusable components, built for prompt-driven and documentation-based integration. Syntax highlighting powered by Highlight.js.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://compass-ui.vercel.app",
    repo: "https://github.com/nashvin-nidu/next-c-library",
  },
  {
    title: "TixSphere",
    year: "2026",
    description:
      "Full-stack event discovery and booking platform supporting 100+ events, with MongoDB handling event data and registrations, and PostHog analytics driving UI/UX decisions.",
    stack: ["Next.js", "MongoDB", "PostHog", "Tailwind CSS"],
    live: "https://tixsphere.vercel.app",
    repo: "https://github.com/nashvin-nidu/tix-sphere-nextjs-16",
  },
  {
    title: "Salamath Survey System",
    year: "2025",
    description:
      "Offline-first PWA for door-to-door data collection, handling 500+ records with admin-only access. Surveys are stored locally in low-network areas and sync automatically on reconnection.",
    stack: ["Next.js", "PostgreSQL", "Better Auth", "PWA"],
    live: null,
    repo: null,
  },
  {
    title: "Rehab Poly CRM",
    year: "2026",
    description:
      "CRM built for a polyclinic workflow — patient records, scheduling and pipeline views, deployed on Vercel.",
    stack: ["TypeScript", "Next.js"],
    live: "https://rehab-ruby-tau.vercel.app",
    repo: "https://github.com/nashvin-nidu/REHAB-POLY-CRM",
  },
  {
    title: "Simon Game",
    year: "2025",
    description:
      "Interactive memory game with random sequence generation and real-time input validation — a small exercise in game state done right.",
    stack: ["JavaScript", "CSS"],
    live: "https://nashvin-nidu.github.io/Simon-Game/",
    repo: "https://github.com/nashvin-nidu/Simon-Game",
  },
  {
    title: "CakeSugaryMoon",
    year: "2025",
    description:
      "Responsive bakery website with an interactive UI and structured product display.",
    stack: ["HTML", "CSS"],
    live: "https://nashvin-nidu.github.io/CakeSugaryMoon/",
    repo: "https://github.com/nashvin-nidu/CakeSugaryMoon",
  },
  {
    title: "Calorie Counter",
    year: "2025",
    description:
      "Calorie-tracking app with dynamic meal entries, real-time calculations, and input validation.",
    stack: ["JavaScript", "CSS"],
    live: "https://nashvin-nidu.github.io/Calories-Counter.js/Log/",
    repo: "https://github.com/nashvin-nidu/Calories-Counter.js",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "C", "PHP"],
  },
  {
    group: "Frameworks",
    items: ["React.js", "Next.js", "NestJS", "Laravel", "TanStack Query", "Zustand", "Zod"],
  },
  {
    group: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Drizzle ORM", "Docker", "Cloudflare", "Vercel", "Railway"],
  },
  {
    group: "Tools & Concepts",
    items: ["n8n Automation", "PostHog", "Passport.js", "Monorepo Architecture", "REST APIs", "PWA"],
  },
];

export const research = {
  title: "Synthetic Aperture Radar (SAR) in Disaster Monitoring",
  type: "Review Paper",
  points: [
    "Studied SAR principles and applications in landslide detection and flood mapping.",
    "Applied time-series SAR data and InSAR techniques to detect surface changes.",
    "Evaluated real-world case studies using Sentinel-1 data — flood mapping accuracy of ~96%.",
    "Documented findings in a structured technical report using LaTeX with APA style.",
  ],
};

export const certifications = [
  {
    name: "Cisco Networking Basics",
    issuer: "Cisco",
    detail: "Network protocols, IPv4/IPv6 addressing, configuration, troubleshooting and secure connectivity.",
    link: "https://drive.google.com/file/d/1LfOsTl8jnP_U-RLmZRxQPPn9moHy7vKv/view?usp=sharing" as string | null,
  },
  {
    name: "Data Science & AI",
    issuer: "IIT Madras",
    detail: "Machine learning fundamentals — KNN, supervised & unsupervised learning, data-driven problem solving.",
    link: "https://drive.google.com/file/d/1rvomuJgxUCWcm57vfZXslZB7AIz0mz7G/view?usp=sharing" as string | null,
  },
];

export const leadership = [
  {
    org: "Polytechnic Research & Innovation Committee",
    role: "Core Member",
    detail:
      "10-member committee supporting patent and paper-writing initiatives; proposed an alumni-led session that drew 50+ students across departments.",
  },
  {
    org: "AIESEC Jalandhar",
    role: "Media Team",
    detail:
      "Selected for the global youth organization; contributed to media initiatives.",
  },
];
