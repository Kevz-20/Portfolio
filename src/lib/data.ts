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
    "I'm a full-stack engineer who loves turning ambiguous ideas into polished, production-ready products. Over the past several years I've worked across the stack — from crafting pixel-perfect, accessible interfaces to designing resilient APIs and data models.",
    "I care most about the details that make software feel effortless: thoughtful motion, fast load times, and interfaces that get out of the user's way. When I'm not shipping code, I'm usually exploring new design systems, contributing to open source, or hiking somewhere with terrible cell signal.",
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
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: FiLinkedin },
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
    role: "Senior Software Engineer",
    org: "Northwind Labs",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Leading front-end architecture for a suite of internal analytics products used by 200+ teams.",
    bullets: [
      "Rebuilt the core dashboard in Next.js, cutting median load time by 45%",
      "Designed a shared component library adopted across 6 product teams",
      "Mentored 3 junior engineers through structured pairing and code review",
    ],
  },
  {
    id: "exp-2",
    type: "work",
    role: "Software Engineer",
    org: "Brightloop",
    period: "2021 — 2023",
    location: "San Francisco, CA",
    description:
      "Built customer-facing features end-to-end across a Node.js/React SaaS platform.",
    bullets: [
      "Shipped a self-serve billing flow that reduced support tickets by 30%",
      "Introduced automated E2E testing, catching regressions before release",
      "Partnered with design to launch a full UI refresh in under one quarter",
    ],
  },
  {
    id: "exp-3",
    type: "work",
    role: "Frontend Developer",
    org: "Studio Fenwick",
    period: "2019 — 2021",
    location: "Austin, TX",
    description:
      "Delivered marketing sites and web apps for clients ranging from startups to Fortune 500 brands.",
    bullets: [
      "Built 15+ responsive, accessible marketing sites from Figma designs",
      "Introduced a component-driven workflow that halved handoff time",
    ],
  },
  {
    id: "exp-4",
    type: "education",
    role: "B.S. in Computer Science",
    org: "University of Texas at Austin",
    period: "2015 — 2019",
    location: "Austin, TX",
    description:
      "Focused on human-computer interaction and distributed systems.",
    bullets: [
      "Graduated with honors",
      "Teaching assistant for Intro to Web Development",
    ],
  },
];
