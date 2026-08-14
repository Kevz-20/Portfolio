import type { IconType } from "react-icons";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiFigma,
  SiRedis,
} from "react-icons/si";

/**
 * Central place for all editable portfolio content.
 * Swap out the values below with your own — nothing else needs to change.
 */

export const SITE = {
  name: "Kevin Rey Mejares",
  initials: "KRM",
  role: "Full-Stack Developer | Mobile & Web Application Developer",
  tagline:
    "I design and build fast, accessible, and delightful mobile and web experiences — from pixel to production.",
  location: "Remote · Philippines",
  email: "kevinmejares20@gmail.com",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a full-stack developer who builds mobile and web applications from the ground up — from the first line of code to a live product in someone's hands. My first real deployment was a mobile app I built and shipped for my own business, which pushed me to learn the full lifecycle of a product: planning features, designing the interface, writing the backend, and actually getting it into production rather than leaving it as a side project.",
    "From there, I expanded that same business into a cross-platform experience, building a companion web app alongside the mobile app so customers could reach it however was easiest for them. That project taught me a lot about sharing logic and design across platforms without compromising the experience on either one.",
    "Right now I'm especially interested in e-commerce — building online shop websites that help small businesses like mine sell online without needing a big technical team behind them. I'm still early in my career, but I care a lot about writing clean, maintainable code and shipping things that actually work for the people using them, and I'm always looking for the next project to learn from.",
  ],
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-rey-mejares-0744b3423/", icon: FiLinkedin },
  { label: "Email", href: `mailto:${SITE.email}`, icon: FiMail },
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: FiTwitter },
];

export type Skill = { name: string; icon: IconType };
export type SkillGroup = { category: string; skills: Skill[] };

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Vercel", icon: SiVercel },
      { name: "Figma", icon: SiFigma },
      { name: "Redis", icon: SiRedis },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "aurora-dashboard",
    title: "Aurora Analytics Dashboard",
    description:
      "A real-time analytics dashboard with customizable widgets, live data streaming, and role-based access control for teams.",
    image: "/images/projects/project-1.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/aurora-dashboard",
    featured: true,
  },
  {
    id: "pathfinder-cms",
    title: "Pathfinder Headless CMS",
    description:
      "A lightweight headless CMS with a drag-and-drop content builder, versioning, and a GraphQL API for front-end teams.",
    image: "/images/projects/project-2.svg",
    tags: ["React", "Node.js", "GraphQL", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/pathfinder-cms",
    featured: true,
  },
  {
    id: "orbit-chat",
    title: "Orbit Realtime Chat",
    description:
      "A realtime team chat app with threaded conversations, presence indicators, and end-to-end encrypted direct messages.",
    image: "/images/projects/project-3.svg",
    tags: ["React", "Express", "Redis", "Socket.IO"],
    githubUrl: "https://github.com/yourusername/orbit-chat",
  },
  {
    id: "lumen-shop",
    title: "Lumen Storefront",
    description:
      "A composable e-commerce storefront with server-rendered product pages, cart persistence, and Stripe checkout.",
    image: "/images/projects/project-4.svg",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/lumen-shop",
  },
];

export type ExperienceItem = {
  id: string;
  type: "work" | "education";
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "work",
    role: "Team Leader",
    org: 'E.M.P.O.W.E.R — Android Mobile Application',
    period: "2023 — Present",
    location: "Cebu, PH",
    description:
      "A digital tool designed to assist Department of Social Welfare and Development – Sustainable Livelihood Program (DSWD-SLP) participants in managing their micro-enterprises through basic accounting and bookkeeping.",
    bullets: [
      "Led the team building an Android app for DSWD-SLP program participants",
      "Designed core accounting and bookkeeping features tailored to micro-enterprise owners",
    ],
  },
  {
    id: "exp-2",
    type: "education",
    role: "Student",
    org: "Cebu Technological University — Ginatilan Extension Campus",
    period: "2023 — Present",
    location: "Ginatilan, Cebu, PH",
    description: "",
    bullets: [],
  },
];
